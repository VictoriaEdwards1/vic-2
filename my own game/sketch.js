var startRectangle,startRectangleImg
var restartButton, restartButtonImg
var ladyRunning, ladyRunningImg
var spikes, spikesImg

function preload(){
  startRectangleImg = loadImage("rectangeBasicStarter.png")
  restartButtonImg = loadImage("restartButton.png")
  ladyRunningImg = loadAnimation("ladyRunning1.png","ladyRunning2.png","ladyRunning3.png","ladyRunning4.png","ladyRunning5.png")
  spikesImg = loadImage("spikes.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight)
  
  startRectangle = createSprite(width/3,height/3, 50, 50)
  startRectangle.addImage(startRectangleImg)
  
  restartButton = createSprite(width/7,height/7, 20, 20)
  restartButton.addImage(restartButtonImg)
  
  ladyRunning = createSprite(width/2,height/2, 100, 100)
  ladyRunning.addAnimation("ladyRunning",ladyRunningImg)
  ladyRunning.scale = 1.5
  
  spikes = createSprite(width/2,height/2, 40, 40)
  spikes.addImage(spikesImg)
}

function draw(){
  background(0)
  drawSprites()

}