
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof,ground;
var rope1,rope2,rope3,rope4,rope5;
var bobDiameter;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
bobDiameter  = 50;
	//Create the Bodies Here.
	roof = new Roof(500,100,400,20);
	ground = new Roof(500,690,1000,20);
	bob1 = new Bob(400,600,25);
	bob2 = new Bob(450,600,25);
	bob3 = new Bob(500,600,25);
	bob4 = new Bob(550,600,25);
	bob5 = new Bob(600,600,25);
	
	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,bobDiameter,0);
	rope5 = new Rope(bob5.body,roof.body,bobDiameter*2,0);
	
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("grey");
  rope1.display();
  bob1.display();
  rope2.display();
  bob2.display();
  rope3.display();
  bob3.display();
  rope4.display();
  bob4.display();
  rope5.display();
  bob5.display();
  ground.display();
  roof.display();
  drawSprites();
 
}
function keyPressed(){

if(keyCode === 38){

	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-40});

}

}


