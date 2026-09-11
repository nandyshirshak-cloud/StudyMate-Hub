/* =========================
   DARK MODE
========================= */

const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkBtn.innerText = "☀️";
    } else {
        darkBtn.innerText = "🌙";
    }

});


/* =========================
   NOTES
========================= */

const notes = {

    cn: {
        title: "Computer Networks",
        text:
        "A computer network is a group of connected computers that can share data and resources. The OSI model has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation and Application."
    },

    dsa: {
        title: "Data Structures",
        text:
        "A data structure is a way of organizing and storing data. Common data structures include arrays, linked lists, stacks, queues, trees and graphs."
    },

    ai: {
        title: "Artificial Intelligence",
        text:
        "Artificial Intelligence is a field of computer science that develops systems capable of performing tasks that normally require human intelligence, such as learning, reasoning and recognizing patterns."
    }

};


function showNote(type) {

    document.getElementById("noteTitle").innerText =
        notes[type].title;

    document.getElementById("noteText").innerText =
        notes[type].text;

    document.getElementById("noteModal").style.display =
        "block";

}


function closeNote() {

    document.getElementById("noteModal").style.display =
        "none";

}


window.onclick = function(event) {

    const modal =
        document.getElementById("noteModal");

    if (event.target === modal) {

        modal.style.display = "none";

    }

};


/* =========================
   RESOURCE BUTTON
========================= */

function resourceMessage(name) {

    alert(
        name +
        " section is coming soon! 🚀"
    );

}


/* =========================
   SEARCH
========================= */

const searchBox =
    document.getElementById("searchBox");

searchBox.addEventListener("input", function () {

    const search =
        searchBox.value.toLowerCase();

    const cards =
        document.querySelectorAll(".searchable");

    cards.forEach(function(card) {

        const text =
            card.innerText.toLowerCase();

        if (text.includes(search)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});


/* =========================
   MCQ QUIZ
========================= */

const questions = [

    {
        question:
        "How many layers are there in the OSI model?",

        answers: [
            "5",
            "6",
            "7",
            "8"
        ],

        correct: 2
    },

    {
        question:
        "Which data structure follows LIFO?",

        answers: [
            "Queue",
            "Stack",
            "Array",
            "Graph"
        ],

        correct: 1
    },

    {
        question:
        "AI stands for?",

        answers: [
            "Automatic Internet",
            "Artificial Intelligence",
            "Advanced Information",
            "Applied Internet"
        ],

        correct: 1
    }

];


let currentQuestion = 0;

let score = 0;


function loadQuestion() {

    const q =
        questions[currentQuestion];

    document.getElementById("question")
        .innerText = q.question;

    const answers =
        document.getElementById("answers");

    answers.innerHTML = "";

    q.answers.forEach(function(answer, index) {

        const button =
            document.createElement("button");

        button.innerText = answer;

        button.className = "answer";

        button.onclick = function() {

            checkAnswer(index);

        };

        answers.appendChild(button);

    });

    document.getElementById("result")
        .innerText = "";

}


function checkAnswer(index) {

    const q =
        questions[currentQuestion];

    if (index === q.correct) {

        score++;

        document.getElementById("result")
            .innerText = "✅ Correct!";

    } else {

        document.getElementById("result")
            .innerText =
            "❌ Wrong answer!";

    }

}


function nextQuestion() {

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        document.getElementById("question")
            .innerText =
            "🎉 Quiz Completed!";

        document.getElementById("answers")
            .innerHTML = "";

        document.getElementById("result")
            .innerText =
            "Your score: " +
            score +
            "/" +
            questions.length;

        return;

    }

    loadQuestion();

}


loadQuestion();