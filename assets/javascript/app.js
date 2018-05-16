var count=120;
var counter=setInterval(timer, 1000); //1000 will  run it every 1 second


//Create the countdown function
 function timer() {
  counter;
  count --;
  if (count <= 0)
  {
     clearInterval(counter);
     //counter ended, do something here
     return;
  }

};

window.onload = counter;
// Dispaly the countdown information
$("#time-remaining").html(count);