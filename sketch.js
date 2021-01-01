
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var ball;
 var ballImg, dustbinImg;

 

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ground = new Ground(800,550,1600,20)
	 ball = new Paper(200,525,50)
	 stick1 = new Dustbin(1200,530,200,20)
    stick2 = new Dustbin(1100,490,20,100)
    stick3 = new Dustbin(1300,490,20,100)

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  ball.display();
  stick1.display();
  stick2.display();
  stick3.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed() {
if(keyCode === UP_ARROW) {

Matter.Body.applyForce(ball.body,ball.body.position,{x: 4,y: -7});

}
}



