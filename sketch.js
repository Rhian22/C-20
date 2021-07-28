var a,b;

function setup() {
  createCanvas(800,400);
 a= createSprite(400, 200, 50, 50);
 a.shapeColor="blue";
 b= createSprite(200,100,30,30);
 b.shapeColor="red";
}

function draw() {
  background(255,255,255);
  b.x=World.mouseX;
  b.y=World.mouseY;
  drawSprites();
}