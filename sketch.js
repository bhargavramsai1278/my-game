//write code here
var PLAY=1
var END=0

var gameState=PLAY
var mario,mario_running,mario_collided
var ground,invisibleground,groundImg
var obstaclesGroup,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5
var score=0
var gameOver,restart
var coinGroup,coinImg,coin
var bgImg

function preload() {
mario_running=loadAnimation("mario.png")
mario_collided=loadAnimation("mario_colided.png")   
groundImg=loadImage("ground2.jpg")
obstacle1=loadImage("obstacle1.jpg") 
obstacle2=loadImage("obstacle2.jpg") 
obstacle3=loadImage("obstacle3.png") 
obstacle4=loadImage("obstacle4.png") 
obstacle5=loadImage("obstacle5.png") 
coinImg=loadImage("coin.png")
bgImg=loadImage("bg.png")
}

function setup() {
    createCanvas(800,200)
    mario=createSprite(50,170,20,50)
   mario.addAnimation("running",mario_running)
   mario.addAnimation("collided",mario_collided)
mario.scale=0.07
ground=createSprite(200,150,400,20)
ground.addImage("ground",groundImg)
ground.x=ground.width/2

}


function draw() {
    background(bgImg)
    if(gameState===PLAY){

    }
drawSprites()


    }