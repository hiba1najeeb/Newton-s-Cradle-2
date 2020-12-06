
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;
var bob1,bob2,bob3, bob4,bob5, roofObject
var rope1,rope2,rope3, rope4,rope5;


function preload()
{
 
}


function setup() {
	createCanvas(750,450);
	rectMode(CENTER);

	
	//backgrounds.scale=1;
	//backgrounds.x=backgrounds.width/2;

	engine = Engine.create();
	world = engine.world;

	

	bobDiameter=40;

	var p1=width/2;
	var p2=height/4+500;
	bob1=new Ball(260,400,50);
	bob2=new Ball(330,400,50);
	bob3=new Ball(390,400,50);
	bob4=new Ball(450,400,50);
	bob5=new Ball(510,400,50);
	
	
	
	//Create a Ground
	c1 = new Circle(260,150,10)
	c2 = new Circle(310,150,10)
	c3 = new Circle(360,150,10)
	c4 = new Circle(410,150,10)
	c5 = new Circle(460,150,10)
	rope1=new rope(bob1.body,c1.body,0, 0)
	rope2=new rope(bob2.body,c2.body,0, 0)
	rope3=new rope(bob3.body,c3.body,0, 0)
	rope4=new rope(bob4.body,c4.body,0, 0)
	rope5=new rope(bob5.body,c5.body,0, 0)
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("black")
 
  c1.display()
  c2.display()
  c3.display()
  c4.display()
  c5.display()



  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  
 }

function mouseDragged (){

	Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
}









