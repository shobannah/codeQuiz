
var questions = [
    {
        question: "What tag is used for header 1?", 
        choice1: "<p>" , 
        choice2: "<ul>", 
        choice3: "<h>", 
        choice4: "<h1>",
        correctAnswer: "<h1>",
    },
    {
        question: "What resets the styling of all HTML elements to a consistent baseline?",
        choice1:"css file" , 
        choice2: "css reset file" , 
        choice3: "css starter file" , 
        choice4: "css main file",
        correctAnswer: "css reset file",
    },
    {
        question: "How many times can you repeat an id in an html file?",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        correctAnswer: "1",
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
var score = 0;
var finishPageEl = document.getElementById("finishPage");
var formEl = document.querySelector("form");
var highscoresEl = document.getElementById("highScores");
var selectedAnswer;
var timerEl = document.getElementById('countdown');
var timeLeft = 75;
var timeInterval;

starButtonEl.addEventListener("click", startQuiz)


function countdown() {
    timeInterval = setInterval(function () {
    if(timeLeft > 1) {
        timerEl.textContent = "Time: " + timeLeft + " seconds left";
        timeLeft--;
    }else {
        timerEl.textContent = "Time's Up!";
        clearInterval(timeInterval); 
    }
    }, 1000);
}

function startQuiz() {
    starButtonEl.classList.add("hide")
    questionContainerEl.classList.remove("hide")
    startGame()
    countdown()
}


startGame = () => {
    availableQuestions = [...questions]
    getNewQuestion()
},

getNewQuestion = () => {
    var questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    
    if (!currentQuestion) {
        return finish()
    } 
    
    questionBlock.innerText = currentQuestion.question
    choices.forEach(choice => {
        const number = choice.dataset["number"]
        choice.innerText = currentQuestion["choice" + number]
    });

    availableQuestions.splice(questionIndex, 1)

    acceptingAnswer = true
},

console.log(currentQuestion)


choices.forEach((choice, i) =>{
    choice.addEventListener("click", e => {
        
        console.log(e.target.innerText)
        if (e.target.innerText === currentQuestion.correctAnswer) {
            alert("You are correct!")
        } else {
            timeLeft -= 15
        }
        
        var selectedChoice = e.target
        var selectedAnswer = selectedChoice.dataset["number"]
        var classToApply = selectedAnswer == currentQuestion.correctAnswer ? "correct" : "incorrect"   
        score = selectedAnswer == currentQuestion.correctAnswer ? score + 1 : score;
        selectedChoice.parentElement.classList.add(classToApply)
        
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)

})

})




function finish () {
 questionContainerEl.classList.add("hide")
 finishPageEl.classList.remove("hide")
 var highscores = JSON.parse(localStorage.getItem('highscores')) || [];

 highscores.forEach(score => {
    var scoreEl = document.createElement("div")
    scoreEl.innerHTML = `${score.userName} : ${score.score}`
    highscoresEl.append(scoreEl)
 })
}

formEl.addEventListener("submit", function(e) {
    e.preventDefault()
    var userName = document.getElementById("name").value
    console.log(userName)
    var highscores = JSON.parse(localStorage.getItem('highscores')) || [];
    highscores.push({
        userName,
        score
    })
    localStorage.setItem('highscores', JSON.stringify(highscores));
    var scoreEl = document.createElement("div")
    scoreEl.innerHTML = `${userName} : ${score}`
    highscoresEl.prepend(scoreEl)
})
