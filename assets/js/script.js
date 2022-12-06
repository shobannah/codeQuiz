
var myQuestions = [
    {
        question: "What tag is used for header 1?",
        answers: { 
            a: "<p>" , 
            b: "<ul>", 
            c: "<h>", 
            d: "<h1>",
        },
        correctAnswer: "d",
    },
    {
        question: "What resets the styling of all HTML elements to a consistent baseline?",
        answers: {
            a:"css file" , 
            b: "css reset file" , 
            c: "css starter file" , 
            d: "css main file",
        },
        correctAnswer: "b",
    },
    {
        question: "How many times can you repeat an id in an html file?",
        answers: {
            a: 1,
            b: 2,
            c: 3,
            d: 4,
        },
        correctAnswer: "a",
    }
];

var starButtonEl = document.getElementById("start-button");
var questionContainerEl = document.getElementById("question-container")
var questionEl = document.getElementById("question")
var answersEl = document.getElementById("answer-buttons")



starButtonEl.addEventListener("click", startQuiz)

function startQuiz() {
    starButtonEl.classList.add("hide")
    questionContainerEl.classList.remove("hide")
    showQuestion
}




function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}



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

countdown();