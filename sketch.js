var rect1,rect2;

function setup(){
  createCanvas(600,300);
  rect1=createSprite(300,150,50,30);
  rect1.shapeColor="green";
  rect1.debug=true;

  rect2=createSprite(100,150,40,20);
  rect2.shapeColor="green";
  rect2.debug=true;
}
function draw(){
  background("black");
  rect2.x=mouseX;
  rect2.y=mouseY;

  if(rect2.x-rect1.x<rect1.width/2+rect2.width/2 &&
      rect1.x-rect2.x<rect2.width/2+rect1.width/2 &&
       rect1.y-rect2.y<rect1.height/2+rect2.height/2 &&
        rect2.y-rect1.y<rect2.height/2+rect1.height/2){

    rect2.shapeColor="red";
    rect1.shapeColor="red";

    
  }
  else{
    rect1.shapeColor="green";
    rect2.shapeColor="green"
  }


  drawSprites();
}