// declare global variables
var startBtn = document.querySelector("#startBtn");
var timerEL = document.querySelector("#timer");
var pointsEl = document.querySelector("#points");
var penaltyEl = document.querySelector("#penalty");
var main = document.querySelector("#main");
var headerEl = document.querySelector("#question");

var timerInterval;
var timeLeft = 0
var timePenalty = 10;
var currentPoints = 0;
var currentPenalty= 0;
var allQuestionsIndex = 0;

//questions array
var allQuestions = [{
    header: "Which of the following is not a JavaScript data type?",
    choices: ["string", "number", "array", "boolean"],
    correctAnswer: "array",
},
{
    header: "Which characters are used to define an object?",
    choices: ["()", "{}", "\"\"", "\[\]"],
    correctAnswer: "{}",
},
{
    header: "What is the correct syntax when creating a function?",
    choices: ["function() myFuncation:", "function:myFunction()", "myFunction()", "function myFunction()"],
    correctAnswer: "function myFunction()",
},
{
    header: "What condition is this IF statment checking for? `if(i !=== five )`",
    choices: ["if 'i' is not equal to 5", "if 'i' is not euqal to 'five'", "if 'i' is not equal to '5'", "all of the above" ],
    correctAnswer: "all of the above",
}
];

// Attach event listener to start button to call startQuiz function on click
startBtn.addEventListener("click", startQuiz);

//startQuiz function when button clicked
function startQuiz() {
    //functions to call
    timeLeft = 60;
    countDown();
    // function for displaying qustions section
    showQuestions();
};

// countDown function for timer and triggers quizOver()
function countDown() {
    // setInterval(function() {if / else},1000);
    timerInterval = setInterval(function() {
        timeLeft = 60;
        timeLeft--;
        timerEL.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            // function for displaying initals input
            // enterInitials();
        }
    },1000);
}

// render questions and choices
function showQuestions() {
    // clears exisitng data
    headerEl.innerHTML = "";
    // creates ul element for choices
    var listEl = document.createElement("ul");
    listEl.innerHTML = "";
    // declare varables for questions and choices using for loop
    for (var i = 0; i < allQuestions.length; i++) {
        var currentQuestion = allQuestions[allQuestionsIndex].header;
        var currentChoices = allQuestions[allQuestionsIndex].choices;
        // display question into html
        headerEl.textContent = currentQuestion;
    }
    // create and display choices into new li elements
    currentChoices.forEach(function (newLi) {
        // declare variable for new li
        var liEl = document.createElement("li");
        // render choices into text content of li elements
        liEl.textContent = newLi;
        // append new li elements into created ul element
        ulCreate.appendChild(liEl);
        // make li elements clickable as event listeners in order to check for right answer
        liEl.addEventListener("click", (checkAnswer));
    })
}
    // function userAnswer(event){
    //     if (event.target.data.index === questions[currentQuestionIndex].answerIndex) {
    //         // if(more questions are availabe) is the currentquestionIndex < questions.length
    //         // change textcontent of question section
    //     }
    //     else (event.target.data.index === !questions[currentQuestionsIndex].answerIndex) {
            // if(more questions are availabe) is the currentquestionIndex < questions.length
                // else when no more questions are avaiable or time is out
                // store points to local storage
                // display initial form and submition button
                    // when submission buttom clicked show highscore page with try it again button
            // decrement time
    //     };
    // }
// incorrect answer increases penalties and decreases time by 10sec

// when timer = 0 page changes to record page

// when inital is entered data is stored

// each time record page pops up, old data is returned

//optional Try Agin button

// FOR HIGHSCORES page:
// function to get scores from local storage
// to add new scores to local storage
// to clear local storage