var gameOver = false;
var count=60;
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

//initialize game hiding
$("#container2").hide();
//initialize game over results hiding
$("#container3").hide();

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

// Game End Function

function gameEnd() {
  $("#container2").hide();
  $("#container3").show();
  $("#answers-correct").text(answersCorrect);
  $("#answers-wrong").text(answersWrong);
  $("#time-left").text(count);
}

// Game logic function

function gameLogic() {
  answer1 = $('.question1:checked').val();
  if (answer1 === answers.answer1) {
    answersCorrect ++;
  }
  else {
    answersWrong ++;
  }
  //question 2
  answer2 = $('.question2:checked').val();
  if (answer2 === answers.answer2) {
    answersCorrect ++;
  }
  else {
    answersWrong ++;
  }
  //question 3
  answer3 = $('.question3:checked').val();
  if (answer3 === answers.answer3) {
    answersCorrect ++;
  }
  else {
    answersWrong ++;
  }
  //question 4
  answer4 = $('.question4:checked').val();
  if (answer4 === answers.answer4) {
    answersCorrect ++;
  }
  else {
    answersWrong ++;
  }
  //question 5
  answer5 = $('.question5:checked').val();
  if (answer5 === answers.answer5) {
    answersCorrect ++;
  }
  else {
    answersWrong ++;
  }
   //question 6
   answer6 = $('.question6:checked').val();
   if (answer6 === answers.answer6) {
     answersCorrect ++;
   }
   else {
     answersWrong ++;
   }
   //question 7
   answer7 = $('.question7:checked').val();
   if (answer7 === answers.answer7) {
     answersCorrect ++;
   }
   else {
     answersWrong ++;
   }
   //question 8
   answer8 = $('.question8:checked').val();
   if (answer8 === answers.answer8) {
     answersCorrect ++;
   }
   else {
     answersWrong ++;
   }
   //question 9
   answer9 = $('.question9:checked').val();
   if (answer9 === answers.answer9) {
     answersCorrect ++;
   }
   else {
     answersWrong ++;
   }
     //question 10
     answer10 = $('.question10:checked').val();
     if (answer10 === answers.answer10) {
       answersCorrect ++;
     }
     else {
       answersWrong ++;
     }

}


// Make it so when you press the start button the game begins and the counter begins
$("#start-button").on("click", function(){

  //hide the start menu
  $("#container1").hide();
  //show the game
  $("#container2").show();

  var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
//Create the countdown function
//If countdown ends, the game is over
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
    gameLogic();
    gameEnd();
  };
};


// if the submit button is pressed, the game is over
$("#submit-button").on("click", function() {
 
  gameLogic();

  gameOver = true;
  if (gameOver === true) {
    gameEnd();
    gameOver = false;
  };
});

});
