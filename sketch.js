function setup() {
  createCanvas(1200,800);
 fixedrect=createSprite(400, 200, 50, 50);
 movingrect=createSprite(600,400,80,30);
 fixedrect.shapeColor="blue";
 movingrect.shapeColor="blue";
 rect1=createSprite(275,100,50,50);
 rect2=createSprite(275,700,50,50);
 rect1.shapeColor="lime";
 rect2.shapeColor="purple";
 rect1.velocityY=3;
 rect2.velocityY=-3;
}

function draw() {
  background(255,255,255);
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
    && fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2
  &&movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
  &&fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2
   ){
    fixedrect.shapeColor="pink";
    movingrect.shapeColor="pink";
   }
else{
  fixedrect.shapeColor="blue";
 movingrect.shapeColor="blue";
}

if(rect1.x-rect2.x<rect2.width/2+rect1.width/2
  && rect2.x-rect1.x<rect1.width/2+rect2.width/2){
rect1.velocityX=rect1.velocityX*(-1);
rect2.velocityX=rect2.velocityX*(-1);
  }

  if(rect1.y-rect2.y<rect2.height/2+rect1.height/2
    && rect2.y-rect1.y<rect1.height/2+rect2.height/2){
  rect1.velocityY=rect1.velocityY*(-1);
  rect2.velocityY=rect2.velocityY*(-1);
    }
  
  drawSprites();
}