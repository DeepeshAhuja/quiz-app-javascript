const questions = [
    {
        question: "What is 2 + 2?",
        answers: [
            {text: "3",correct: false},
            {text: "4",correct: true},
            {text: "2",correct: false},
            {text: "5",correct: false},
        ]
    },
    {
        question: "What is 2 + 3?",
        answers: [
            {text: "3",correct: false},
            {text: "4",correct: false},
            {text: "2",correct: false},
            {text: "5",correct: true},
        ]
    },
    {
        question: "What is 2 + 4?",
        answers: [
            {text: "3",correct: false},
            {text: "4",correct: false},
            {text: "2",correct: false},
            {text: "6",correct: true},
        ]
    },
    {
        question: "What is 2 + 5?",
        answers: [
            {text: "3",correct: false},
            {text: "4",correct: false},
            {text: "2",correct: false},
            {text: "7",correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


startQuiz();