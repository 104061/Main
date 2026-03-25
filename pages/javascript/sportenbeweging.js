const vragen = [
    {
        vraag: "Hoeveel stappen moet je minimaal per dag zetten als volwassen??",
        antwoorden: ["10.000", "5.000", "15.000", "20.000"],
        correct: 0
    },
    {
        vraag: "Hoeveel minuten moet je ongeveer rust nemen tussen je sets in?",
        antwoorden: ["1-2 min", "3-4 min", "2-3 min", "90 sec"],
        correct: 2
    },
    {
        vraag: "Welke van onderstaande oefeningen is voor je bicep?",
        antwoorden: ["Peck Deck", "Lat Pulldwown", "Bayesian Curl", "Leg Extension"],
        correct: 2
    },
    {
        vraag: "Hoeveel liter water moet je per dag minimaal drinken?",
        antwoorden: ["1.5 liter", "3 liter", "1 liter", "2 liter"],
        correct: 0
    },
    {
        vraag: "Welke voedingsstof is goed voor spiergroei?",
        antwoorden: ["Vetten", "Koolhydraten", "Calorieeen", "Eiwitten"],
        correct: 3
    },
    {
        vraag: "Waar staat PPL voor?",
        antwoorden: ["Power Performance Lift", "Push Pull Legs", "Personal Physical Level", "Progressive Power Overload"],
        correct: 1
    },
    {
        vraag: "Waar is een warming-up voor?",
        antwoorden: ["Tijdens de sets", "Na de training", "Voor de training", "In je rusttijd"],
        correct: 2
    },
    {
        vraag: "Hoe krijg je blessures?",
        antwoorden: ["Te zware gewichten", "Niet tot falen trainen", "Geen warming-up", "Slechte vorm"],
        correct: [2, 3]
    },
    {
        vraag: "Hoeveel sets en reps is goed voor snelle spiergroei?",
        antwoorden: ["2 sets, 10 reps", "3 sets, 12 reps", "3 sets, 10 reps", "2 sets, 6-8 reps"],
        correct: 3
    },
    {
        vraag: "Wat train je met cardio?",
        antwoorden: ["Longen en Hart", "Benen en Billen", "Flexibiliteit", "Uithoudingsvermogen"],
        correct: 0
    }
];

let huidigeVraag = 0;
let score = 0;

function laadVraag() {
    document.getElementById("vraag").innerText = vragen[huidigeVraag].vraag;

    const buttons = document.querySelectorAll(".antwoorden button");

    vragen[huidigeVraag].antwoorden.forEach((antwoord, index) => {
        buttons[index].innerText = antwoord;

        // reset kleuren en klikbaarheid
        buttons[index].style.backgroundColor = "";
        buttons[index].disabled = false;
    });
}

function checkAntwoord(gekozen) {
    const buttons = document.querySelectorAll(".antwoorden button");
    const correct = vragen[huidigeVraag].correct;

    buttons.forEach((btn, index) => {
        if (index === correct) {
            btn.style.backgroundColor = "green";
        } else if (index === gekozen) {
            btn.style.backgroundColor = "red";
        }

        btn.disabled = true;

    });
    if (gekozen === correct) {
        score++;
    }
}

function volgendeVraag () {
    huidigeVraag++;

    if (huidigeVraag < vragen.length) {
        laadVraag();
    } else {
        // quiz verbergen
        document.querySelector(".quiz").style.display = "none";
        document.getElementById("next").style.display = "none";

        // eindscherm tonen
        document.getElementById("eindscherm").style.display = "block";

        // score tonen
        document.getElementById("scoreTekst").innerText =
            `Je hebt ${score} van de ${vragen.length} goed!`;
    }
}

laadVraag();
