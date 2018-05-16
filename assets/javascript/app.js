var gameOver = false;
var count=120;
var counter=setInterval(timer, 1000); //1000 will  run it every 1 second


//Create the countdown function
 function timer() {
  count --;
  if (count < 0)
  {
     clearInterval(counter);
     //counter ended, do something here
     return gameOver = true;
  }
  $("#time-remaining").html(count);
};

// Dispaly the countdown information
