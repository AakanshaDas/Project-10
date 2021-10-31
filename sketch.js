var background;
var ship;



function preload(){

ship
}

function setup(){
  createCanvas(400,400);
  ship=createSprites(200,200)
  
}

function draw() {
  background("blue");
  background.velocityX=-1;
  if(sea.x<0){
    sea.x=sea.width/2;

    drawSprites();
  }

}