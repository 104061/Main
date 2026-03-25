document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('#contents button');
    let path = window.location.pathname;
    if (!path || path === '/') {
        path = '/Volumes/103837/School/Quizie/index.html';
    }
    const pageMap = {
        '/Volumes/103837/School/Quizie/index.html': 'Home',
        '/Volumes/103837/School/Quizie/index/pages/Quizen.html': 'Quizzen',
        '/Volumes/103837/School/Quizie/index/pages/AboutUs.html': 'About Us',
        '/Volumes/103837/School/Quizie/index/pages/Contact.html': 'Contact'
    };
    const currentPage = pageMap[path] || 'Home';

    buttons.forEach(button => {
        if (button.textContent.trim() === currentPage) {
            button.classList.add('active');
        }
    });
});

const questions = [
    {
        question: "Welk aminozuur is essentieel bij de aanmaak van serotonine en melatonine?",
        answers: ["Leucine", "Tryptofaan", "Glutamine", "Lysine"],
        correct: 1,
        explanation: "Tryptofaan is een essentieel aminozuur dat dient als voorloper voor serotonine en melatonine — stoffen die stemming en slaap reguleren.",
        bron: { label: "Voedingscentrum  Tryptofaan", url: "https://www.voedingscentrum.nl/encyclopedie/eiwitten.aspx" }
    },
    {
        question: "Wat is de glykemische index (GI) een maat voor?",
        answers: [
            "Het vetgehalte van een voedingsmiddel",
            "Hoe snel koolhydraten de bloedsuiker verhogen",
            "De hoeveelheid calorieën per 100 gram",
            "De verteerbaarheid van eiwitten"
        ],
        correct: 1,
        explanation: "De GI geeft aan hoe snel de koolhydraten in een voedingsmiddel de bloedglucose laten stijgen ten opzichte van pure glucose (GI = 100).",
        bron: { label: "Diabetes Fonds  Glykemische index", url: "https://www.diabetesfonds.nl/over-diabetes/leven-met-diabetes/wat-is-de-glykemische-index" }
    },
    {
        question: "Welk mineraal is noodzakelijk voor de werking van het enzym insuline en speelt een rol bij koolhydraatstofwisseling?",
        answers: ["Calcium", "Zink", "Chroom", "Selenium"],
        correct: 2,
        explanation: "Chroom versterkt de werking van insuline en helpt bij de regulatie van de bloedsuikerspiegel. Een tekort kan insulineresistentie bevorderen.",
        bron: { label: "Orthokennis  Chroom en insuline", url: "https://www.orthokennis.nl/artikelen/chroom" }
    },
    {
        question: "Wat is het verschil tussen HDL- en LDL-cholesterol?",
        answers: [
            "HDL is schadelijk, LDL is beschermend",
            "HDL transporteert cholesterol naar de lever, LDL naar de weefsels",
            "LDL wordt alleen gevonden in plantaardige vetten",
            "Er is geen functioneel verschil"
        ],
        correct: 1,
        explanation: "HDL ('goed' cholesterol) transporteert cholesterol terug naar de lever voor afbraak. LDL ('slecht' cholesterol) brengt het naar weefsels en kan bij overschot ophopen in vaatwanden.",
        bron: { label: "Hartstichting  Cholesterol uitgelegd", url: "https://www.hartstichting.nl/risicofactoren/cholesterol" }
    },
    {
        question: "Hoeveel gram eiwit per kilogram lichaamsgewicht wordt aanbevolen voor krachtsporters die spiermassa willen opbouwen?",
        answers: ["0,8 g/kg", "1,2 g/kg", "1,6  2,2 g/kg", "3,5 g/kg"],
        correct: 2,
        explanation: "Onderzoek toont aan dat 1,6 tot 2,2 g eiwit per kg lichaamsgewicht optimaal is voor spiereiwitsynthese bij krachtsport. Meer heeft geen bewezen extra voordeel.",
        bron: { label: "Voedingscentrum  Eiwitten en sport", url: "https://www.voedingscentrum.nl/encyclopedie/eiwitten.aspx" }
    },
    {
        question: "Welke stof in spinazie belemmert de opname van calcium en ijzer?",
        answers: ["Fytinezuur", "Oxaalzuur", "Tannine", "Lectine"],
        correct: 1,
        explanation: "Oxaalzuur (oxalaat) in spinazie bindt aan calcium en ijzer, waardoor deze mineralen slecht worden opgenomen. Koken vermindert het oxaalzuurgehalte enigszins.",
        bron: { label: "Voedingscentrum  Antinutriënten", url: "https://www.voedingscentrum.nl/encyclopedie/antinutrienten.aspx" }
    },
    {
        question: "Wat is de primaire rol van de lever in de vetsstofwisseling?",
        answers: [
            "Vetten opslaan als glycogeen",
            "Vetzuren omzetten in glucose via gluconeogenese",
            "Vetzuren bèta-oxideren en ketonen produceren bij vasten",
            "Lipoproteïnen afbreken in de darm"
        ],
        correct: 2,
        explanation: "Bij vasten of koolhydraatarme voeding breekt de lever vetzuren af via bèta-oxidatie en produceert ketonlichamen, die als alternatieve energiebron dienen voor o.a. de hersenen.",
        bron: { label: "NCBI  Hepatic lipid metabolism", url: "https://www.ncbi.nlm.nih.gov/books/NBK556024/" }
    },
    {
        question: "Welk vitamine fungeert als co-enzym bij meer dan 100 enzymatische reacties en is cruciaal voor de aanmaak van neurotransmitters?",
        answers: ["Vitamine B1 (thiamine)", "Vitamine B6 (pyridoxine)", "Vitamine B9 (foliumzuur)", "Vitamine B12 (cobalamine)"],
        correct: 1,
        explanation: "Vitamine B6 (pyridoxine) is betrokken bij de synthese van serotonine, dopamine en GABA, en speelt een rol bij eiwit- en koolhydraatstofwisseling.",
        bron: { label: "Voedingscentrum  Vitamine B6", url: "https://www.voedingscentrum.nl/encyclopedie/vitamine-b6.aspx" }
    },
    {
        question: "Wat wordt bedoeld met een 'negatieve energiebalans'?",
        answers: [
            "Je eet meer dan je verbrandt",
            "Je verbrandt meer dan je eet",
            "Je energie-inname is gelijk aan je verbruik",
            "Je bloedsuiker is te laag na het sporten"
        ],
        correct: 1,
        explanation: "Een negatieve energiebalans betekent dat de energie-inname lager is dan het energieverbruik. Het lichaam grijpt dan naar reserves (vetweefsel, spierweefsel) als brandstof.",
        bron: { label: "Voedingscentrum  Energiebalans", url: "https://www.voedingscentrum.nl/encyclopedie/energiebalans.aspx" }
    },
    {
        question: "Welke bewering over vezels is correct?",
        answers: [
            "Oplosbare vezels verhogen het LDL-cholesterol",
            "Onoplosbare vezels vertragen de maagontlediging sterk",
            "Oplosbare vezels worden door darmbacteriën gefermenteerd tot korteketenvetzuren",
            "Vezels leveren evenveel energie als koolhydraten"
        ],
        correct: 2,
        explanation: "Oplosbare vezels (zoals pectine en inuline) worden gefermenteerd door de darmflora tot korteketenvetzuren (bijv. butyraat), die de darmgezondheid ondersteunen en ontstekingsremmend werken.",
        bron: { label: "Voedingscentrum  Voedingsvezels", url: "https://www.voedingscentrum.nl/encyclopedie/vezels.aspx" }
    }
];
 
let currentQuestion = 0;
let score = 0;
let answered = false;
 
const answerButtons = () => [
    document.getElementById('antwoord1'),
    document.getElementById('antwoord2'),
    document.getElementById('antwoord3'),
    document.getElementById('antwoord4')
];
 
function renderQuestion() {
    const q = questions[currentQuestion];
    answered = false;
 
    document.getElementById('vraag').textContent = `(${currentQuestion + 1}/${questions.length}) ${q.question}`;
 
    answerButtons().forEach((btn, i) => {
        btn.textContent = q.answers[i];
        btn.disabled = false;
        btn.style.backgroundColor = '';
        btn.style.color = '';
        btn.style.transform = '';
    });
 
    document.getElementById('next').style.display = 'none';
    const existing = document.getElementById('uitleg');
    if (existing) existing.remove();
}
 
function checkAntwoord(index) {
    if (answered) return;
    answered = true;
 
    const q = questions[currentQuestion];
    const isCorrect = index === q.correct;
    if (isCorrect) score++;
 
    answerButtons().forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.correct) {
            btn.style.backgroundColor = 'rgb(110, 192, 87)';
            btn.style.color = 'black';
        } else if (i === index) {
            btn.style.backgroundColor = '#ff6b6b';
            btn.style.color = 'white';
        }
    });
 
    const uitleg = document.createElement('div');
    uitleg.id = 'uitleg';
    uitleg.innerHTML = `
        <p style="margin:0 0 10px 0;">${isCorrect ? '✅ Goed! ' : '❌ Fout. '}${q.explanation}</p>
        <a href="${q.bron.url}" target="_blank" style="
            display: inline-block;
            color: rgb(110,192,87);
            background: black;
            padding: 6px 14px;
            border-radius: 8px;
            font-size: 15px;
            font-weight: bold;
            text-decoration: none;
            transition: opacity 0.2s;
        ">📖 Bron: ${q.bron.label} ↗</a>
    `;
    uitleg.style.cssText = `
        color: white;
        text-align: center;
        font-size: 17px;
        margin-top: 16px;
        padding: 14px 20px;
        background: rgba(0,0,0,0.35);
        border-radius: 10px;
        line-height: 1.6;
    `;
    document.querySelector('.quiz').appendChild(uitleg);
 
    const nextBtn = document.getElementById('next');
    nextBtn.style.display = 'inline-block';
    nextBtn.textContent = currentQuestion < questions.length - 1
        ? 'Volgende vraag →'
        : 'Bekijk resultaat →';
}
 
function volgendeVraag() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        renderQuestion();
    } else {
        toonResultaat();
    }
}
 
function toonResultaat() {
    const pct = score / questions.length;
    let emoji, title, desc;
 
    if (pct === 1)        { emoji = '🏆'; title = 'Perfect!';       desc = 'Je kent voeding & diëtetiek uitstekend!'; }
    else if (pct >= 0.75) { emoji = '🎉'; title = 'Heel goed!';     desc = 'Slechts een paar kleine hiaten. Top gedaan!'; }
    else if (pct >= 0.5)  { emoji = '👍'; title = 'Niet slecht!';   desc = 'Goede basis, maar er valt nog wat te leren.'; }
    else                  { emoji = '📚'; title = 'Blijf oefenen!'; desc = 'Probeer het nog eens na wat extra studie!'; }
 
    document.querySelector('.holder').innerHTML = `
        <div class="title">${emoji} ${title}</div>
        <div class="quiz" style="text-align:center; padding: 60px 130px;">
            <p style="color:white; font-size:22px; margin-bottom: 16px;">${desc}</p>
            <p style="color:white; font-size:48px; font-weight:bold; margin: 0;">${score} / ${questions.length}</p>
            <p style="color: rgb(110,192,87); font-size:18px; margin-top: 8px;">punten behaald</p>
            <div style="margin-top: 32px; display:flex; gap:16px; justify-content:center; flex-wrap:wrap;">
                <button onclick="location.reload()"
                    style="font-size:20px; padding:12px 24px; border-radius:10px; border:none; background:rgb(110,192,87); cursor:pointer; font-weight:bold;">
                    Opnieuw proberen
                </button>
                <button onclick="window.location.href='../../index/pages/Quizen.html'"
                    style="font-size:20px; padding:12px 24px; border-radius:10px; border:none; background:white; cursor:pointer; font-weight:bold;">
                    Andere quizzen
                </button>
            </div>
        </div>
    `;
}
 
document.addEventListener('DOMContentLoaded', function () {
    renderQuestion();
 
    const buttons = document.querySelectorAll('#contents button');
    const path = window.location.pathname;
    const pageMap = {
        '/Volumes/103837/School/Quizie/index.html': 'Home',
        '/Volumes/103837/School/Quizie/index/pages/Quizen.html': 'Quizzen',
        '/Volumes/103837/School/Quizie/index/pages/AboutUs.html': 'About Us',
        '/Volumes/103837/School/Quizie/index/pages/Contact.html': 'Contact'
    };
    const currentPage = pageMap[path] || 'Home';
    buttons.forEach(btn => {
        if (btn.textContent.trim() === currentPage) btn.classList.add('active');
    });
});