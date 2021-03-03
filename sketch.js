var santa,santaimg,gift,gift1,gift2,gift3,gift4,bg,bgimg,invbg;
function preload(){
  santaimg = loadAnimation("../images/santa1.png","../images/santa2.png","../images/santa3.png","../images/santa4.png","../images/santa5.png","../images/santa6.png","../images/santa7.png","../images/santa8.png","../images/santa9.png","../images/santa10.png","../images/santa11.png");
  gift1 = loadImage("../images/gift1.png");
  gift2 = loadImage("../images/gift2.png");
  gift3 = loadImage("../images/gift3.png");
  gift4 = loadImage("../images/gift4.png");
   bgimg = loadImage("../images/background.jpg");
}





function setup() {
  createCanvas(displayWidth,displayHeight);
  bg = createSprite(width/2,height-150,width,50);
  bg.shapeColor = "#98BDD8";
  invbg = createSprite(width/2,height-150,width,10);
  invbg.visible = false;
  
}

function draw() {
  background(bgimg);  
  drawSprites();
}