// make player a class / then create instance 
// player is a different circle each time
// add / remove the circle 
// click / touch circle until it finally disappears (amount is random)
// player disappears and reappears in dif spots on canvas  



var score = 1;
var start = true;
var pressed = false;
var cOnScreen = true; 
var cX = Math.floor((Math.random()*200)+1);
var cY = Math.floor((Math.random()*200)+1);
var cD = 80;
var timeUP = false; 


function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here

 if (start == true){
 player.circle(cX, cY, cD, cD);
 start = false;
 }


 // if mouse is in circle
 if (inCircle(mouseX, mouseY, cX, cY, cD)) {
     
  // and mouse is released
  if (pressed == true && cOnScreen == true){

  // add 1 to your score
  score++; 
  console.log("Your Score is " + score);
  pressed = false;
  }

  } 

  else { pressed = false;}


// a random check to remove circle
// add timer to check time gone
if (score % 5 == 0){

	// kill inside loop is causing issues...
	player.kill();
	// nolonger visable 
	cOnScreen = false;   
	
}


if (timeUP == true){

	player.circle(cX, cY, cD, cD);
	cOnScreen = true;
	timeUP = false; 
}



// END OF DRAW
} // DRAW // ----------- //// 



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







 function mouseReleased() {
 
 pressed = true;
 //console.log(pressed); 
 }





// Timer to give you 3sec
function playTimer(){

  TimersJS.oneShot(3000, function() {
    console.log("Time Up");
    timeUP = true; 

});  

}





var player = {

	circle: function(x,y,a,b){ 
		fill(204,102,0); 
		ellipse(x,y,a,b);
	},

	kill: function(){
		clear(player.circle);
		playTimer(); 
	}


} // player 

