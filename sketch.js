var World = Matter.World;
var Bodies = Matter.Bodies;
var Engine = Matter.Engine;
var world22, engine22;
var bgimage;

function preload(){
   bgimage = loadImage("garbage.jpg");
}
function setup(){
createCanvas(1250,550);
engine22 = Engine.create();
world22 = engine22.world;    

fill("white");
trash = new Paper(150,455,40);
dustbin1 = new Dustbin(1110,468,190,15);
dustbin2 = new Dustbin(1020,385,15,180);
dustbin3 = new Dustbin(1200,385,15,180);
ground = new Ground(width/2,485,width,20);
}

function draw(){
	background('black');
	imageMode(CENTER);
	image(bgimage,width/2,height/2,width,height);
	rectMode(CENTER)
	ground.display();
	trash.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	textSize(25);
	text("DUSTBIN",1070,530)
	text("TRASH",120,530);
	Engine.update(engine22);
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	 Matter.Body.setStatic(trash.body, false);
	 Matter.Body.applyForce(trash.body,trash.body.position,{x: 370, y: -370});
	 }
}



