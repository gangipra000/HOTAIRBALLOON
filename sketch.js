var balloon;
var background;
var database;

function preload(){
background = loadImage("._Hot Air Balloon-01.png");
}

function setup() {
  createCanvas(500,500);
 balloon =  createSprite(400, 200, 50, 50);
 balloon.addAnimation("._Hot Air Balloon-02.png","._Hot Air Balloon-03.png");
 database.firebase.database();
}

function draw() {
  background(255,255,255); 
  background.addmage("._Hot Air Balloon-01.png");
  
  
  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x+10;
  }
  else if(keyDown(Up_ARROW)){
    balloon.y = balloon.y+10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y+10;
  }



  drawSprites();
}