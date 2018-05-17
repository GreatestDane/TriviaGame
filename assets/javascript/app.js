var gameOver = false;
var count=120;
var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
var answersCorrect = 0;
var answersWrong = 0;
var answer1;
var answer2;
var answer3;
var answer4;
var answer5;
var answer6;
var answer7;
var answer8;
var answer9;
var answer10;

//Create the object for the answers

var answers = {
  answer1: "red",
  answer2: "oroku-saki",
  answer3: "splinter",
  answer4: "scientist",
  answer5: "karai",
  answer6: "venus",
  answer7: "mona-lisa",
  answer8: "sports-equipment",
  answer9: "fugitoid",
  answer10: "time-master"
}


//Create the countdown function
 function timer() {
  count --;
  $("#time-remaining").html(count);
  if (count === 0)
  {
     clearInterval(counter);
     //counter ended, do something here
    gameOver = true;
  }
  if (gameOver === true) {
    alert("game over!");
  }
};

if (gameOver === true) {
  alert("game over!");
};

// Game logic and onclick functions
// question 1
$(".question1").on("click", function() {
  answer1 = $(this).attr("value");
  if (answer1 === answers.answer1) {
    answersCorrect ++;
    alert("Answers correct " + answersCorrect + " Answers Wrong " + answersWrong);
  }
  else {
    answersWrong ++;
    alert("Answers correct " + answersCorrect + " Answers Wrong " + answersWrong);
  }
});

//question 2
$(".question2").on("click", function() {
  answer2 = $(this).attr("value");
  if (answer2 === answers.answer2) {
    answersCorrect ++;
    alert("Answers correct " + answersCorrect + " Answers Wrong " + answersWrong);
  }
  else {
    answersWrong ++;
    alert("Answers correct " + answersCorrect + " Answers Wrong " + answersWrong);
  }
});

// question 3
$(".question3").on("click", function() {
  answer3 = $(this).attr("value");
  if (answer3 === answers.answer3) {
    answersCorrect ++;
    alert("Answers correct " + answersCorrect + " Answers Wrong " + answersWrong);
  }
  else {
    answersWrong ++;
    alert("Answers correct " + answersCorrect + " Answers Wrong " + answersWrong);
  }
});

// question 4
$(".question4").on("click", function() {
  answer4 = $(this).attr("value");
  if (answer4 === answers.answer4) {
    answersCorrect ++;
    alert("Answers correct " + answersCorrect + " Answers Wrong " + answersWrong);
  }
  else {
    answersWrong ++;
    alert("Answers correct " + answersCorrect + " Answers Wrong " + answersWrong);
  }
});

// question 5
$(".question5").on("click", function() {
  answer5 = $(this).attr("value");
  if (answer5 === answers.answer5) {
    answersCorrect ++;
    alert("Answers correct " + answersCorrect + " Answers Wrong " + answersWrong);
  }
  else {
    answersWrong ++;
    alert("Answers correct " + answersCorrect + " Answers Wrong " + answersWrong);
  }
});

// question 6
$(".question6").on("click", function() {
  answer6 = $(this).attr("value");
  if (answer6 === answers.answer6) {
    answersCorrect ++;
    alert("Answers correct " + answersCorrect + " Answers Wrong " + answersWrong);
  }
  else {
    answersWrong ++;
    alert("Answers correct " + answersCorrect + " Answers Wrong " + answersWrong);
  }
});

// question 7
$(".question7").on("click", function() {
  answer7 = $(this).attr("value");
  if (answer7 === answers.answer7) {
    answersCorrect ++;
    alert("Answers correct " + answersCorrect + " Answers Wrong " + answersWrong);
  }
  else {
    answersWrong ++;
    alert("Answers correct " + answersCorrect + " Answers Wrong " + answersWrong);
  }
});

// question 8
$(".question8").on("click", function() {
  answer8 = $(this).attr("value");
  if (answer8 === answers.answer8) {
    answersCorrect ++;
    alert("Answers correct " + answersCorrect + " Answers Wrong " + answersWrong);
  }
  else {
    answersWrong ++;
    alert("Answers correct " + answersCorrect + " Answers Wrong " + answersWrong);
  }
});

// question 9
$(".question9").on("click", function() {
  answer9 = $(this).attr("value");
  if (answer9 === answers.answer9) {
    answersCorrect ++;
    alert("Answers correct " + answersCorrect + " Answers Wrong " + answersWrong);
  }
  else {
    answersWrong ++;
    alert("Answers correct " + answersCorrect + " Answers Wrong " + answersWrong);
  }
});

// question 10
$(".question10").on("click", function() {
  answer10 = $(this).attr("value");
  if (answer10 === answers.answer10) {
    answersCorrect ++;
    alert("Answers correct " + answersCorrect + " Answers Wrong " + answersWrong);
  }
  else {
    answersWrong ++;
    alert("Answers correct " + answersCorrect + " Answers Wrong " + answersWrong);
  }
});
