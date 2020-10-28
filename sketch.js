var fixedrect,movingrect



function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  fixedrect.shapeColor = "blue";
  movingrect = createSprite(450,200,40,60);
  movingrect.shapeColor = "coral";
}

function draw() {
  background(0);  
  movingrect.x = mouseX;
  movingrect.y = mouseY;
  drawSprites();
 if(movingrect.x-fixedrect.x < movingrect.width/2+fixedrect.width/2 &&
  fixedrect.x-movingrect.x < movingrect.width/2+fixedrect.width/2 && 
  movingrect.y-fixedrect.y < movingrect.height/2+fixedrect.height/2 &&
  fixedrect.y-movingrect.y < movingrect.height/2+fixedrect.height/2 ) {
  movingrect.shapeColor=  "black"
  fixedrect.shapeColor=  "black"
  }
  else{
    movingrect.shapeColor=  "coral"
    fixedrect.shapeColor=  "blue"
    

  } 
}