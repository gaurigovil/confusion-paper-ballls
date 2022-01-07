
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

function preload()
{
	
}

function setup() {
	createCanvas(900, 800);


	engine = Engine.create();
	world = engine.world;

	groundObj=new ground(width/2,670,width,20);
	leftSide = new ground(1100,600,20,120)
	rightSide = new ground()

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(200,120,20,ball_options)
	World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundObj.display();
  leftSide.display();
  rightSide.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {


	}
}



