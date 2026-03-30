document.addEventListener('DOMContentLoaded', function() {
    const questionCards = document.querySelectorAll('.question-card');
    const resultCard = document.getElementById('result-card');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');
    const quizNavigation = document.getElementById('quiz-navigation');

    const totalQuestions = questionCards.length;
    let currentQuestion = 0;
    let score = 0;
    let answered = false;

    const feedbackMessages = {
        1: {
            correct: "Correct! Een volwassene heeft inderdaad 7-9 uur slaap per nacht nodig.",
            incorrect: "Helaas, het juiste antwoord is 7-9 uur per nacht."
        },
        2: {
            correct: "Goed zo! 16-18°C is de ideale temperatuur voor een goede nachtrust.",
            incorrect: "Niet helemaal. De ideale slaapkamertemperatuur is 16-18°C."
        },
        3: {
            correct: "Precies! Blauw licht verstoort de aanmaak van melatonine, het slaaphormoon.",
            incorrect: "Niet correct. Blauw licht verstoort de aanmaak van melatonine."
        },
        4: {
            correct: "Juist! Na 14:00 uur kun je beter geen koffie meer drinken.",
            incorrect: "Het advies is om na 14:00 uur geen koffie meer te drinken."
        },
        5: {
            correct: "Correct! Tijdens slaap verbrand je juist minder calorieën, niet meer.",
            incorrect: "Niet goed. Tijdens slaap verbrand je minder calorieën, niet meer."
        },
        6: {
            correct: "Helemaal goed! Slaaptekort verhoogt het risico op obesitas en diabetes.",
            incorrect: "Jammer. Slaaptekort verhoogt het risico op obesitas en diabetes."
        },
        7: {
            correct: "Klopt! De REM-slaap is de droomfase waarin je hersenen zeer actief zijn.",
            incorrect: "Niet juist. Je droomt het meest tijdens de REM-slaap."
        },
        8: {
            correct: "Goed! Tieners hebben 8-10 uur slaap nodig voor hun ontwikkeling.",
            incorrect: "Helaas. Tieners (14-17 jaar) hebben 8-10 uur slaap per nacht nodig."
        },
        9: {
            correct: "Perfect! Een powernap van 10-20 minuten is ideaal om energie op te doen.",
            incorrect: "Niet goed. De ideale powernap duurt 10-20 minuten."
        },
        10: {
            correct: "Uitstekend! Je lichaam begint ongeveer 2 uur voor je normale bedtijd melatonine aan te maken.",
            incorrect: "Niet correct. Melatonine wordt ongeveer 2 uur voor je normale bedtijd aangemaakt."
        }
    };

    function initQuiz() {
        questionCards.forEach(card => {
            const buttons = card.querySelectorAll('.answer-btn');
            buttons.forEach(btn => {
                btn.addEventListener('click', () => handleAnswer(btn, card));
            });
        });

        nextBtn.addEventListener('click', nextQuestion);
        restartBtn.addEventListener('click', restartQuiz);

        updateProgress();
    }

    function handleAnswer(selectedBtn, card) {
        if (answered) return;
        answered = true;

        const questionNum = card.dataset.question;
        const isCorrect = selectedBtn.dataset.correct === 'true';
        const feedback = document.getElementById(`feedback-${questionNum}`);
        const allButtons = card.querySelectorAll('.answer-btn');

        allButtons.forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.correct === 'true') {
                btn.classList.add('show-correct');
            }
        });

        if (isCorrect) {
            selectedBtn.classList.add('correct');
            feedback.textContent = feedbackMessages[questionNum].correct;
            feedback.classList.add('correct');
            score++;
        } else {
            selectedBtn.classList.add('incorrect');
            feedback.textContent = feedbackMessages[questionNum].incorrect;
            feedback.classList.add('incorrect');
        }

        feedback.classList.add('show');
        nextBtn.disabled = false;

        if (currentQuestion === totalQuestions - 1) {
            nextBtn.textContent = 'Bekijk resultaat';
        }
    }

    function nextQuestion() {
        if (currentQuestion < totalQuestions - 1) {
            questionCards[currentQuestion].classList.remove('active');
            currentQuestion++;
            questionCards[currentQuestion].classList.add('active');
            answered = false;
            nextBtn.disabled = true;
            updateProgress();
        } else {
            showResult();
        }
    }

    function updateProgress() {
        const progress = ((currentQuestion + 1) / totalQuestions) * 100;
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `Vraag ${currentQuestion + 1} van ${totalQuestions}`;
    }

    function showResult() {
        questionCards[currentQuestion].classList.remove('active');
        quizNavigation.style.display = 'none';
        document.querySelector('.quiz-progress').style.display = 'none';
        resultCard.classList.add('active');

        document.getElementById('score-number').textContent = score;

        const percentage = (score / totalQuestions) * 100;
        let message = '';

        if (percentage === 100) {
            message = 'Fantastisch! Je hebt alle vragen goed beantwoord. Je bent een echte slaapexpert!';
        } else if (percentage >= 80) {
            message = 'Uitstekend! Je weet veel over het belang van slaap. Blijf zo doorgaan!';
        } else if (percentage >= 60) {
            message = 'Goed gedaan! Je hebt een goede basiskennis over slaap.';
        } else if (percentage >= 40) {
            message = 'Niet slecht, maar er is nog ruimte voor verbetering. Lees de informatie nog eens door!';
        } else {
            message = 'Je kunt nog wat bijleren over slaap. Bekijk de informatiepagina voor meer tips!';
        }

        document.getElementById('result-message').textContent = message;
    }

    function restartQuiz() {
        currentQuestion = 0;
        score = 0;
        answered = false;

        questionCards.forEach(card => {
            card.classList.remove('active');
            const buttons = card.querySelectorAll('.answer-btn');
            buttons.forEach(btn => {
                btn.disabled = false;
                btn.classList.remove('correct', 'incorrect', 'show-correct', 'selected');
            });
            const feedback = card.querySelector('.feedback');
            feedback.classList.remove('show', 'correct', 'incorrect');
            feedback.textContent = '';
        });

        resultCard.classList.remove('active');
        questionCards[0].classList.add('active');
        quizNavigation.style.display = 'flex';
        document.querySelector('.quiz-progress').style.display = 'block';
        nextBtn.disabled = true;
        nextBtn.textContent = 'Volgende vraag';
        updateProgress();
    }

    initQuiz();
});
