var Constraint = Matter.Constraint
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var shooter,ground1,ground2,ground3;
var rubberBand;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    box1 = new Block(540,235,40,40);
    box2 = new Block(580,235,40,40);
    box3 = new Block(620,235,40,40);
    box4 = new Block(660,235,40,40);
    box5 = new Block(700,235,40,40);
    box6 = new Block(740,235,40,40);
    box7 = new Block(780,235,40,40);
    box8 = new Block(580,195,40,40);
    box9 = new Block(620,195,40,40);
    box10 = new Block(660,195,40,40);
    box11 = new Block(700,195,40,40);
    box12 = new Block(740,195,40,40);
   

    ground1 = new Ground(600,height,1200,20);
    ground2 = new Ground(680,245,400,10);
    shooter = new Block(300,200,40,40);
    rubberBand = new SlingShot(shooter.body,{ x:100, y:100})
}

function draw(){
    background(0);
    Engine.update(engine);
    
    
    
    fill("orange");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("blue");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    rubberBand.display();
    ground1.display();
    ground2.display();
    shooter.display();
    
}
function mouseDragged(){
    Matter.Body.setPosition(shooter.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rubberBand.fly();
}