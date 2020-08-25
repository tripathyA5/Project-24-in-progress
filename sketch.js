
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	engine = Engine.create();
	world = engine.world;

	createCanvas(800, 700);

Ground1=new Ground();
Dustbin1=new Dustbin(620,630,15,50);
Dustbin2=new Dustbin(720,630,15,50);
Dustbin3=new Dustbin(670,680,100,20);
Paper1=new Paper(200,680,50);


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Ground1.display();
  Dustbin1.display();
  Dustbin2.display();
  Dustbin3.display();
  Paper1.display();

  drawSprites();
 
}



