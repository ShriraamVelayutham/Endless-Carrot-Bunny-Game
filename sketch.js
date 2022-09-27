var PLAY = 1;
var END = 0;
var gameState = PLAY;

var bunny;
var forest_background
var carrot
var obstaclesGroup, tree_stump_obstacle, rotten_carrot_obstacle, rock_obstacle
var powerupsGroup, golden_carrot_powerup, rainbow_carrot_powerup
var obstacle

function preload(){
bunnyrunning = loadAnimation("/bunny/1.png",
"/bunny/2.png",
"/bunny/3.png",
"/bunny/4.png",
"/bunny/5.png",
"/bunny/6.png",
"/bunny/7.png",
"/bunny/8.png",
"/bunny/9.png")
forest_background = loadImage("/images/forest background.jpeg")
carrot = loadImage('/images/carrot image.jpeg')
golden_carrot_powerup = loadImage("/images/ golden carrot powerup.png")
rainbow_carrot_powerup = loadImage("/images/rainbow carrot powerup.jpeg")

obstacle1 = loadImage("/images/rock obstacle.jpeg")
obstacle2 = loadImage("/images/rotten carrot obstacle.jpeg")
obstacle3 = loadImage("/images/tree stump obstacle.jpeg")
}


function setup() {
  createCanvas(500, 350)

  ground = createSprite(200,height/2-70,400,20)
  ground.addImage(forest_background)
  ground.velocityX = -4;
  ground.scale=1.7
  bunny = createSprite(50,height-40,20,50)
  bunny.addAnimation("running",bunnyrunning);
  bunny.scale = 0.25;
}

function draw() {
  background(255,255,255);  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
  if(frameCount % 60 === 0){
    var obstacle = createSprite(width, height-20, 10, 40);
    obstacle.velocityX = -(6);
    obstacle.scale = 0.3;
    var rand = Math.round(random(1,3));
     switch(rand)
     { case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
}}
}