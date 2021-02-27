
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObject,paperObject,groundObject;
var World;

function preload()
{
	
}

function setup() {
	createCanvas(800,800);

	rectMode(CENTRE);

	engine = Engine.create();
	world = engine.world;
	dustbinObject=new dustbin(1200,500);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground. 

	var Render=Render.create({
		//element:document.body,
		engine:engine,
		options:{
			width:800,
			height:800,		
		}
	});

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbinObject.display();
  paperObject.display();
  groundObject.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===DOWN_ARROW){
		MAtter.Body.applyForce(paperObject.body.paperObject.body.position,{x:85, y:-85});
	}
}

