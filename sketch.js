
var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 80, 50);
  movingRect.debug=true;
  fixedRect=createSprite(400,200,30,50);
  fixedRect.debug=true;
}

function draw() {
  background("black");  
movingRect.y=World.mouseY;
movingRect.x=World.mouseX;

if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
  && fixedRect.y - movingRect.y < fixedRect.width/2 + movingRect.width/2
  && movingRect.y - fixedRect.y < fixedRect.width/2 + movingRect.width/2
)
  { 
movingRect.shapeColor="green";
fixedRect.shapeColor="green";
}
else{
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}

  drawSprites();
}