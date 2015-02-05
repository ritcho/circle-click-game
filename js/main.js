// make player a class / then create instance 
// player is a different circle each time
// add / remove the circle 
// click / touch circle until it finally disappears (amount is random)
// player disappears and reappears in dif spots on canvas  



var score = 0;
var pressed = false;
var cX = 50;
var cY = 80;
var cD = 80;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here

 // if mouse is in circle
 if (inCircle(mouseX, mouseY, cX, cY, cD)) {
     
  // and mouse is released
  if (pressed == true){

  // add 1 to your score
  score++; 
  console.log(score);
  pressed = false;
  }

  } 

  


else { pressed = false;}

player(cX, cY, cD, cD);




// check if curser is over circle 
function inCircle(mx, my, cx, cy, circleDia ) {

  var distance = dist(mx, my, cx, cy);
  if (distance > circleDia/2) {
    return false;
  } 
  else {
    return true;
  }
} // function inCircle


if (score > 5){

	clear(); 
}

} // draw 



 function mouseReleased() {
 
 pressed = true;
 //console.log(pressed); 
 }


function player(x,y,a,b){

	fill(204, 102, 0);
	ellipse(x,y,a,b); 
}


// Timer to give you 15seconds to draw - then restart is called
function playTimer(){

  TimersJS.oneShot(15000, function() {
    console.log("This is called when the timeout is complete");
    restart();
});  

}



