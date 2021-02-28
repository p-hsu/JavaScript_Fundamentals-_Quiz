// declare global variables
var startBtn = document.querySelector("#startBtn");
var timerEL = document.querySelector("#timer");
var pointsEl = document.querySelector("#points");
var penaltyEl = document.querySelector("#penalty");
var submitBtn = document.querySelector("#submitBtn");
var notHidden = document.querySelector("#defaultHidden");
var mainQuestion = document.querySelector("#Question");
var choices = document.querySelector("#choice1");

var timeLeft;
var currentPoints = 0;
var currentPenalty= 0;
var timerInterval;

//questions array
var questions = [

]

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
        timeLeft--;
        timerEL.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            // function for displaying initals input
            // enterInitials();
        }
    },1000);
}

// display #defaultHidden div
function showQuestions() {
    notHidden.style.visibility = "visible";

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