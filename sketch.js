var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var arrowsGroup;
var score;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  arrowsGroup=createGroup();
  

  

  

 
  




  

  
 
}

function draw() {
  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }

  
  //moving bow
  bow.y = World.mouseY

  
  
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
  }
  
  
  spawnBalloons();
  destroy();
  drawSprites();
}


function spawnBalloons() {
  var select_balloon = Math.round(random(1,4));
  console.log(select_balloon);
  
  if(World.frameCount % 80 == 0) {
    if(select_balloon == 1) {
      redBalloon();
    }
    else if(select_balloon == 2) {
      greenBalloon();
    }
    else if(select_balloon == 3) {
      blueBalloon();
    }
    
    else {
      pinkBalloon();
    }
    
  }
    
  
  
  
}

function createArrow() {
  arrow= createSprite(360, 100, 5, 10);
  arrow.lifetime=50;
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  return arrow; 
  
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20,370)) , 10,10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20,370)) , 10,10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20,370)) , 10,10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20,370)) , 10,10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 0.1;
}

