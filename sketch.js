var fixed,moving;
function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  fixed.shapeColor="red";
  moving=createSprite(200, 200, 40, 50);
  moving.shapeColor="red";
}

function draw() {
  background(255,255,255);  
  moving.x=World.mouseX;
  moving.y=World.mouseY;

  console.log(moving.x-fixed.x);
  if(moving.x-fixed.x < fixed.width/2+moving.width/2 && fixed.x-moving.x < fixed.width/2+moving.width/2 &&
    moving.y-fixed.y < fixed.height/2+moving.height/2 && fixed.y-moving.y < fixed.height/2+moving.height/2 ){
    

    fixed.shapeColor="green";
    moving.shapeColor="green";
  }
  else{
    fixed.shapeColor="red";
    moving.shapeColor="red";
  }
  drawSprites();
}