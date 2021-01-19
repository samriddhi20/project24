
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;

function preload()
{
	
}

function setup() {
createCanvas(1300, 500);
 

engine = Engine.create();
	world = engine.world;
	
	
  paper=new Paper(100,100,40);
  ground = new Ground(650,470,1300,20);
  dustbinBase = new Dustbin(1000,200,300,30)
  dustbinLeftSide = new Dustbin(900,190,30,150)
  dustbinRightSide = new Dustbin(1100,190,30,150)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("purple");
  paper.display();
  ground.display();
  dustbinLeftSide.display();
  dustbinRightSide.display();
  dustbinBase .display();

  
}
function keyPressed(){
  if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:330,y:-330});
  } 
}