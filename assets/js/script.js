
var questions = [
    {
        question: "What tag is used for header 1?", 
        choice1: "<p>" , 
        choice2: "<ul>", 
        choice3: "<h>", 
        choice4: "<h1>",
        correctAnswer: 4,
    },
    {
        question: "What resets the styling of all HTML elements to a consistent baseline?",
        choice1:"css file" , 
        choice2: "css reset file" , 
        choice3: "css starter file" , 
        choice4: "css main file",
        correctAnswer: 2,
    },
    {
        question: "How many times can you repeat an id in an html file?",
        choice1: 1,
        choice2: 2,
        choice3: 3,
        choice4: 4,
        correctAnswer: 1,
    }
];

var starButtonEl = document.getElementById("start-button");
var questionContainerEl = document.getElementById("question-container");
var question = document.querySelector("questionBlock");
// var answersEl = document.getElementById("answer-buttons")
var choices = Array.from(document.querySelectorAll(".choice-text"))

var currentQuestion = {}
var acceptingAnswer = true
var availableQuestions = []


starButtonEl.addEventListener("click", startQuiz)
function startQuiz() {
    starButtonEl.classList.add("hide")
    questionContainerEl.classList.remove("hide")
    startGame
}


startGame = () => {
    availableQuestions = [...questions]
    getNewQuestion()
},

getNewQuestion = () => {
    var questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    questionBlock.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset["number"]
        choice.innerText = currentQuestion["choice" + number]
    });

    availableQuestions.splice(questionIndex, 1)

    acceptingAnswer = true
},


choices.forEach(choice =>{
    choice.addEventListener("click", e => {
        if(!acceptingAnswer) return

        acceptingAnswer = false
        var selectedChoice = e.target
        var selectedAnswer = selectedChoice.dataset["number"]
        var classToApply = selectedAnswer == currentQuestion.correctAnswer ? "correct" : "incorrect"   

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
})

startGame()



var timerEl = document.getElementById('countdown');

function countdown() {


        var timeLeft = 75;
    
        var timeInterval = setInterval(function () {
        if(timeLeft > 1) {
            timerEl.textContent = "Time: " + timeLeft + " seconds left";
            timeLeft--;
        }else{
            timerEl.textContent = "Time's Up!";
            clearInterval(timeInterval); 
            displayMessage();
        }
        }, 1000);
}

countdown()})