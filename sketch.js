
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivaltime = 0 




function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(800,400) 
  monkey = createSprite (70,360,700,10)
monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1
  
  
  ground = createSprite (400,380,1500,10)
  ground.velocityX = -4
  ground.x = ground.width/2;
  console.log(ground.x)
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
 
  
  
  
  
}


function draw() { 
background(225);
  drawSprites();
 
  if(ground.x<0){
    
    ground.x = ground.width/2
  }
  
  
  if(keyDown("space")){  
    monkey.velocityY = -12
    console.log(monkey.y)
  }
    monkey.velocityY = monkey.velocityY+0.8
  monkey.collide(ground);
  

stroke("black")
textSize(20);
fill("black");
survivaltime = Math.ceil(frameCount,frameRate())
text("survivaltime:"+survivaltime,100,50)
  spawnfruit();
  spawnobstacles();
  
}
function spawnfruit(){
  if(frameCount%150 === 0){
     
     
   fruit = createSprite (800,230,50,60)
  
  fruit.velocityX = -2
  fruit.addImage("fruit",bananaImage)
  fruit.scale = 0.15
    fruit.y = Math.round(random(180,250))
    FoodGroup.add(fruit)
    
}
  
  
  
  
  
}
function spawnobstacles(){
  if(frameCount%100 === 0){
  obstacles = createSprite (800,350,10,60)
  obstacles.velocityX = -6
  obstacles.addImage("obstacles",obstacleImage)
  obstacles.scale = 0.2
    obstacleGroup.add(obstacles)
}
  
  
}


  
  
  
  
  
  
  
  




