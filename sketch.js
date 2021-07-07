const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}
var ground;
var dustbin;
var rect1,rect2,rect3;

var paperball;
function setup() {
	createCanvas(1400, 400);


	engine = Engine.create();
	world = engine.world;

ground=new Ground();
dustbin=new Dustbin(800,400);
paperball=new Paperball();


Launcher = new Launcher(paperball.body,{x:200, y:100});
	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(225);


  
ground.display();
dustbin.display();
paperball.display();

Launcher.display();


drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(paperball.body,{x:mouseX,y:mouseY});
	
	
	
	
	}
	function mouseReleased(){
	Launcher.fly()
	
	}
	


