var fixed_rect,moving_rect;
var ob1,ob2,ob3,ob4;

function setup() {
  createCanvas(800,400);
  moving_rect=createSprite(400, 200, 50, 50);
  moving_rect.shapeColor="blue";
 fixed_rect=createSprite(500,200,50,50);
 fixed_rect.shapeColor="red";
 //moving_rect.velocityY = 5;
 //fixed_rect.velocityY = -5;
 ob1=createSprite(100,200,50,50);
 ob1.shapeColor="green";
 ob2=createSprite(200,200,50,50);
 ob2.shapeColor="green";
 ob3=createSprite(300,200,50,50);
 ob3.shapeColor="green";
 ob4=createSprite(600,200,50,50);
 ob4.shapeColor="green";
 ob1.velocityX=1;
}

function draw() {
  background("yellow");  

  ob2.x=World.mouseX;
  ob2.y=World.mouseY;

 if (isTouching(ob2,ob3)){
   text ("Touching",100,100);
 }
 else {
   text("Not Touching",300,300);
 }
  bounceOff(ob1,ob3);
  drawSprites();
}

