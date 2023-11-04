// Import necessary libraries and modules
const { cmd, getRandomInt } = require('../lib');

// Define quiz questions and answers
const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["A. London", "B. Berlin", "C. Paris"],
        correctAnswer: "C"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["A. Earth", "B. Mars", "C. Venus"],
        correctAnswer: "B"
    },
    {
        question: "The iPhone was made in what year?",
        options: ["A. 2004", "B. 2007", "C. 2012"],
        correctAnswer: "B"
    }
    // Add more questions here
];

let currentQuestionIndex = 0;
let userScore = 0;

// Create a command for starting the quiz
cmd({
    pattern: "startquiz",
    desc: "Start a quiz game.",
    category: "games",
    filename: __filename,
}, async (Void, citel) => {
    currentQuestionIndex = 0;
    userScore = 0;
    sendQuestion(citel);
});

// Function to send the next question
function sendQuestion(citel) {
    if (currentQuestionIndex < quizQuestions.length) {
        const questionObj = quizQuestions[currentQuestionIndex];
        const questionMessage = `${questionObj.question}\n${questionObj.options.join("\n")}`;
        citel.reply(questionMessage);
    } else {
        citel.reply(`Quiz completed! Your score: ${userScore}/${quizQuestions.length}`);
    }
}

// Create a command for answering quiz questions
cmd({
    pattern: "answer",
    desc: "Answer a quiz question (e.g., !answer A).",
    category: "games",
    filename: __filename,
}, async (Void, citel, text) => {
    const userAnswer = text.trim().toUpperCase();
    const currentQuestion = quizQuestions[currentQuestionIndex];

    if (currentQuestion && userAnswer === currentQuestion.correctAnswer) {
        userScore++;
    }

    currentQuestionIndex++;
    sendQuestion(citel);
});
