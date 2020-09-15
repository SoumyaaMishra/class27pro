const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var holder
function preload()
{

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	holder = new Ground(400,150,360, 30);
	ball1 = new Bob(280,450,30);
	ball2 = new Bob(340,450,30);
	ball3 = new Bob(400,450,30);
	ball4 = new Bob(460,450,30);
	ball5 = new Bob(520,450,30);
	rope1 = new Rope(ball1.body, {x : 280, y : 150});
	rope2 = new Rope(ball2.body, {x : 340, y : 150});
	rope3= new Rope(ball3.body, {x : 400, y : 150});
	rope4= new Rope(ball4.body, {x :460, y : 150});
	rope5= new Rope(ball5.body, {x : 520, y : 150});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  holder.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body, ball1.body.position, {x : -140, y : -110});
		console.log("Up Arrow pressed");
	}
}



