var fixedRect, movingRect;
var a,b,c,d;
function setup() {
  createCanvas(1200,800);
  a = createSprite(600, 400, 50, 80);
  a.shapeColor = "green";
  
  b= createSprite(400,200,80,30);
  b.shapeColor = "green";
  b.debug = true;

  c = createSprite(500, 400, 50, 80);
  c.shapeColor = "orange";

  d= createSprite(300, 400, 50, 80);
  d.shapeColor = "purple";
}

function draw() {
  background(0,0,0);  
  b.x = World.mouseX;
  b.y = World.mouseY;

  if(isTouching(b,d)){
    b.shapeColor="red";
    d.shapeColor="red";
  }
  else{
    b.shapeColor="green";
    d.shapeColor="purple";
  }
  drawSprites();
}
