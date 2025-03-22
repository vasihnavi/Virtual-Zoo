// Quiz Data
const quizData = [
    {
        question: "What is the fastest land animal?",
        options: ["Cheetah", "Lion", "Horse", "Kangaroo"],
        correct: "Cheetah"
    },
    {
        question: "Which animal is known for its black and white stripes?",
        options: ["Zebra", "Tiger", "Panda", "Skunk"],
        correct: "Zebra"
    },
    {
        question: "What is the largest species of bird?",
        options: ["Eagle", "Albatross", "Ostrich", "Peacock"],
        correct: "Ostrich"
    },
    {
        question: "Which sea creature has three hearts?",
        options: ["Octopus", "Shark", "Dolphin", "Whale"],
        correct: "Octopus"
    },
    {
        question: "Which mammal is known to lay eggs?",
        options: ["Platypus", "Kangaroo", "Echidna", "Dolphin"],
        correct: "Platypus"
    },
    {
        question: "What is the tallest animal in the world?",
        options: ["Giraffe", "Elephant", "Camel", "Hippopotamus"],
        correct: "Giraffe"
    },
    {
        question: "Which animal is known as the ship of the desert?",
        options: ["Camel", "Horse", "Donkey", "Elephant"],
        correct: "Camel"
    },
    {
        question: "Which bird is known for its colorful plumage and mimicking sounds?",
        options: ["Peacock", "Parrot", "Kingfisher", "Flamingo"],
        correct: "Parrot"
    },
    {
        question: "What is the largest species of fish?",
        options: ["Great White Shark", "Whale Shark", "Swordfish", "Tuna"],
        correct: "Whale Shark"
    },
    {
        question: "Which animal is known for having a pouch to carry its young?",
        options: ["Kangaroo", "Koala", "Wallaby", "Wombat"],
        correct: "Kangaroo"
    },
    {
        question: "What is the largest land animal?",
        options: ["Elephant", "Giraffe", "Lion", "Bear"],
        correct: "Elephant"
    },
    {
        question: "Which animal is known as the king of the jungle?",
        options: ["Tiger", "Lion", "Leopard", "Panther"],
        correct: "Lion"
    },
    {
        question: "Which bird is a symbol of peace?",
        options: ["Eagle", "Pigeon", "Dove", "Crow"],
        correct: "Dove"
    }
];

// DOM Elements
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const scoreEl = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

// Load Question
function loadQuestion() {
    clearOptions();
    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");
        button.addEventListener("click", () => selectAnswer(button, currentQuestion.correct));
        optionsEl.appendChild(button);
    });
    nextBtn.disabled = true;
}

// Clear Options
function clearOptions() {
    optionsEl.innerHTML = "";
}

// Handle Answer Selection
function selectAnswer(button, correctAnswer) {
    const allOptions = document.querySelectorAll(".option-btn");

    allOptions.forEach(btn => btn.disabled = true);

    if (button.textContent === correctAnswer) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    allOptions.forEach(btn => {
        if (btn.textContent === correctAnswer && !btn.classList.contains("correct")) {
            btn.classList.add("correct");
        }
    });

    nextBtn.disabled = false;
}

// Move to Next Question or Show Score
nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
});

// Show Final Score
function showScore() {
    document.getElementById("question-container").style.display = "none";
    scoreContainer.style.display = "block";
    scoreEl.textContent = `Your Score: ${score} / ${quizData.length}`;
}

// Navigate Back to Home
function goHome() {
    window.location.href = "index.html"; // Replace with your main webpage
}

// Initialize Quiz
loadQuestion();
