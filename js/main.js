// SIMPLE CLICK CIRCLE FOR POINTS GAME 



var score = 0;
var start = true; 
var pressed = false;
var cOnScreen = true; 
var cD = 80;
var dX;
var dY;


function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
 // runs start
 if (start == true){

 var cX = Math.floor((Math.random()*200)+1);
 var cY = Math.floor((Math.random()*200)+1);

 player.circle(cX, cY, cD, cD);
 // run function to begin logic 
 cAppear(); 
 start = false;
 // set vars equal to check within circle
 dX = cX;
 dY = cY;

} // start
 


 // if mouse is in circle
 if (inCircle(mouseX, mouseY, dX, dY, cD)) {
     
  // and mouse is released
  if (pressed == true && cOnScreen == true){

  // add 1 to your score
  score++; 
  console.log("Your Score is " + score);
  pressed = false;
  }

  } 

  else { pressed = false;}


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


// Circle Spawn - after x seconds player spawned 
function cSpawned(){

  	TimersJS.oneShot(Math.floor((Math.random()*5000)+1), function() {
    console.log("spawning");
    start = true;
    //cAppear(); // spawn player 
    

});

}

// Circle Disappears - after x seconds player killed 
function cDisappear(){

	// var to suggest kill has been activated

  	TimersJS.oneShot(500, function() {
    console.log("circle is killed..");
    clear(player.circle); // kill player
    cOnScreen = false; // player not on screen 
    cSpawned(); // call the spawn.
    

});

}



// Circle Appears - after x seconds player is spawned 
function cAppear(){

	//player.circle(cX, cY, cD, cD); // draw the cirlce
	cOnScreen = true; // player on screen

  	TimersJS.oneShot(Math.floor((Math.random()*5000)+1), function() {
  	console.log("cDisappear called"); 
    cDisappear(); // call the kill function
    

});

}

var player = {

	circle: function(x,y,a,b){ 
		fill(204,102,0); 
		ellipse(x,y,a,b);
	}


} // player 


