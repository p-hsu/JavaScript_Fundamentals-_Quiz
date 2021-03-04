// declare global variables
var startBtn = document.querySelector("#startBtn");
var timerEL = document.querySelector("#timer");
var pointsEl = document.querySelector("#points");
var penaltyEl = document.querySelector("#penalty");
var main = document.querySelector("#main");
var headerEl = document.querySelector("#question");
var ulEl = document.querySelector("#choicesUl");

var timerInterval;
var timeLeft = 0;
var timePenalty = 10;
var currentPoints = 0;
var currentPenalty= 0;
var allQuestionsIndex = 0;

//questions array
var allQuestions = [{
    quest: "Which of the following is not a JavaScript data type?",
    choices: ["string", "number", "array", "boolean"],
    correctAnswer: "array",
},
{
    quest: "Which characters are used to define an object?",
    choices: ["()", "{}", "\"\"", "\[\]"],
    correctAnswer: "{}",
},
{
    quest: "What is the correct syntax when creating a function?",
    choices: ["function() myFuncation:", "function:myFunction()", "myFunction()", "function myFunction()"],
    correctAnswer: "function myFunction()",
},
{
    quest: "What condition is this IF statment checking for? `if(i !=== five )`",
    choices: ["if 'i' is not equal to 5", "if 'i' is not equal to 'five'", "if 'i' is not equal to '5'", "all of the above" ],
    correctAnswer: "all of the above",
},
{
    quest: "What does DOM stand for",
    choices: ["Document Object Manual", "Dominating Object Model", "Document Object Model", "Document Operater Model" ],
    correctAnswer: "Document Object Model",
}
];

// Attach event listener to start button to call startQuiz function on click
startBtn.addEventListener("click", startQuiz);

// worked with instructor for comprehension of this function
function checkQuestionIndex() {
    // if time is out and no more questions, then stop timer and call quizOver
    if (timeLeft <= 0 || allQuestionsIndex === allQuestions.length - 1){
        clearInterval(timerInterval);
        quizOver();
    }
}

function countDown() {
    // setInterval(function() {if / else},1000);
    timerInterval = setInterval(function() {
        timeLeft--;
        timerEL.textContent = timeLeft.toString();
        checkQuestionIndex()
    },1000);
}

//startQuiz function when button clicked
function startQuiz() {
    timeLeft = 60;
    //function for timer
    countDown();
    // function for displaying questions section
    showQuestions();
};

// render questions and choices
function showQuestions() {
    // clears exisitng data
    headerEl.innerHTML = "";
    // creates ul element for choices
    ulEl.innerHTML= "";
    // declare varables for questions and choices using for loop
    for (var i = 0; i < allQuestions.length; i++) {
        var currentQuestion = allQuestions[allQuestionsIndex].quest;
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
        ulEl.appendChild(liEl);
        // make li elements clickable as event listeners in order to check for right answer
        liEl.addEventListener("click", (checkAnswer));
    })
}

// checkAnswer function using event.target to match answers
function checkAnswer (event) {
    var userChoice = event.target;
    if (userChoice.matches("li")) {
        // correct answer will add points
        if (userChoice.textContent == allQuestions[allQuestionsIndex].correctAnswer) {
            currentPoints++;
            pointsEl.textContent = currentPoints;
        } else {
            // incorrect answer will add penalty and deduct time
            currentPenalty++;
            penaltyEl.textContent = currentPenalty;
            timeLeft = timeLeft - timePenalty
            timerEL.textContent = timeLeft;
        }
    }
    // checkAnswer will also check allQuestionIndex for moving through quiz
    // moving to next question in array
    allQuestionsIndex++;

    // condition for no more questions
    if (allQuestionsIndex >= allQuestionsIndex.length) {
        quizOver();
    } else {
        // call showQuestions again for next question
        showQuestions(allQuestionsIndex);
    }
}

// quizOver function for user stats and data storage
function quizOver() {
    main.innerHTML = "";
    timerEL.textContent = "";
    pointsEl.textContent = "";
    penaltyEl.textContent = "";

    //create userStats page
    var newHeader = document.createElement("h2");
    newHeader.setAttribute("id", "newH2");
    newHeader.textContent = "Quiz Completed!"

    main.appendChild(newHeader);

    var newP1 = document.createElement("p");
    newP1.setAttribute("id", "newP1");
    newP1.textContent = "Your Stats:";

    main.appendChild(newP1);

    // display stats and append to newP1
    if (timeLeft >= 0) {
        var timeRemaining = timeLeft;
        var userPoints = currentPoints;
        var userPenalty = currentPenalty;
        var newP2 = document.createElement("p");
        newP2.textContent = "Time: " + timeRemaining + "Points: " + userPoints + "Penalties: " + userPenalty;

        main.appendChild(newP2)
    }

    // create input to submit user initials
    var userInitials = document.createElement("label");
    userInitials.setAttribute("id", "label");
    userInitials.textContent = "Record your initials:";

    main.appendChild(userInitials);

    var userInput = document.createElement("input");
    userInput.setAttribute("id", "initials");
    userInput.setAttribute("type", "text");
    userInput.textContent = "";

    main.appendChild(userInput);

    var subBtn = document.createElement("button");
    subBtn.setAttribute("id", "submitBtn");
    subBtn.setAttribute("type", "submit");
    subBtn.textContent = "Record My Stats!"

    main.appendChild(subBtn);

    // event listener for submit button
    subBtn.addEventListener("click", function(){
        var userInitials = userInput.value;
        var userStats = {
            Initials: userInitials,
            Time: timeRemaining,
            Points: userPoints,
            Penalties: userPenalty
        }
        // worked with instructor for this section
        // get stored stats
        var oldStats = localStorage.getItem("allStats");
        var mergedStats = [];
        // set array to empty
        if(!!oldStats){
            // convert from string to js object
            mergedStats = JSON.parse(oldStats)
        }
        // push userStats into mergedStats as one object
        mergedStats.push(userStats);
        // convert to string and store new data of mergedStats into allStats
        localStorage.setItem("allStats", JSON.stringify(mergedStats));

        // go to highscores page
        window.location.replace("highscores.html");
    });
}