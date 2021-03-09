const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function preload() {}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500,300,70,10);
    ground1 = new Ground(900,150,40,10);
}

function draw(){
    background("gray");
    Engine.update(engine);

    ground.display();
    ground1.display();
}