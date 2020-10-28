var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage,obstacle
var FoodGroup, obstacleGroup
var score=0
var survivalTime
var ground

function preload() {
  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}
function setup() {
createCanvas(500,500)
monkey = createSprite(80,450,20,20);
monkey.addAnimation("moving",monkey_running)
monkey.scale=0.1
  
ground = createSprite(400,480,900,5);
ground.velocityX=-4
    
  obstacleGroup= new Group();
  foodGroup= new Group()
}


function draw() {
background("white")
  
  
  if(ground.x<300){
ground.x= ground.width/2
  }
if(keyDown("space")&& monkey.y >=410) {
monkey.velocityY = -33;
}
  
  var survivalTime=0
  stroke("white")
  textSize(20)
  fill("red")
  text("score: "+score, 200,50);
  
  stroke("black")
  textSize(20)
  fill("green")
  survivalTime= Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,20,50)
  
  
  monkey.velocityY = monkey.velocityY + 2
  
  console.log(World.mouseY)
  monkey.collide(ground);
  
  if(foodGroup.isTouching(monkey)){
foodGroup.destroyEach()
score= score+2
  }

obstacles()
food()

  
drawSprites()
}
function obstacles(){
if (World.frameCount%300===0){
obstacle = createSprite(400,200,20,20)
obstacle.addImage(obstacleImage)
obstacle.y= 440
obstacle.velocityX=-4
obstacle.scale=0.2
obstacle.setlifeTime=50
obstacleGroup.add(obstacle)

}
}
function food(){
if (World.frameCount%80===0){
  banana= createSprite(400,200,20,20)
  banana.addImage(bananaImage)
  banana.y= Math.round(random(130,210))
  banana.velocityX=-4
  banana.scale=0.1
  banana.setlifeTime=50
  foodGroup.add(banana)
}
}
