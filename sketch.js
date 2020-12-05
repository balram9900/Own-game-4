var obstacleGroup;

var gameState = "play"

var shoot;
var shootGroup;
function preload(){

jetIMG = loadImage("jet.png")
spaceIMG = loadImage("space.jpg")
meteorIMG = loadImage("Meteors.png")
gameOverIMG = loadImage("gameOver.png")
bulletIMG = loadImage("bullet.png")
meteorbreakingIMG = loadImage("meteor breaking.png")
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-20);
  ground = createSprite(600, 600, 900, 25);
  jet = createSprite(200, 200, 50, 50);
  jet.scale = 0.5
  gameOver = createSprite(displayWidth/2, displayHeight/2, 200, 200);
  gameOver.addImage(gameOverIMG)
  jet.addImage(jetIMG)
  ground.addImage(spaceIMG)
  ground.scale = 2
  
  gameOver.scale = 3
  obstacleGroup = new Group() 
  shootGroup = new Group() 
gameOver.visible = false;
}

function draw() {
  background(255,255,255);  
 if (gameState === "play"){
if (keyDown("space")){
shooting();
}
if (shootGroup.isTouching(obstacleGroup)){
 shootGroup.destroyEach()
 obstacleGroup.destroyEach()
}
  if (keyDown(UP_ARROW)){
jet.y = jet.y-10
  }
  if (keyDown(DOWN_ARROW)){
    jet.y = jet.y+10
      }
ground.velocityX = -6
if (ground.x<0){
  ground.x = ground.width/2
}
if (obstacleGroup.isTouching(jet)){
  gameState = "end"
}
 }
if (gameState === "end"){
  jet.destroy()
  obstacleGroup.destroyEach()
  obstacleGroup.setVelocityXEach(0);
  obstacleGroup.setLifetimeEach(-1)
  ground.velocityX = 0;
  gameOver.visible = true;
  shootGroup.destroyEach()
}
obstacle()
  drawSprites();
}

function obstacle (){
if (frameCount%50 === 0){
  obstacle1 = createSprite(displayWidth+200, random(50,displayHeight-100), 50, 50);

obstacle1.velocityX = -8
obstacle1.addImage (meteorIMG)
obstacleGroup.add(obstacle1)
obstacle1.lifetime = 300;

}




}

function shooting (){

shoot = createSprite(200,200,20,20)
shoot.addImage(bulletIMG);
shoot.scale = 0.2
shoot.x = jet.x
shoot.y = jet.y
shoot.velocityX = 15
shootGroup.add(shoot)

}


