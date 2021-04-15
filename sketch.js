const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box3,box4,box5;
var box2;

var pig1,pig2;
var log1,log2,log3,log4;
var ground;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(650,550,50,50);
    box2 = new Box(780,550,50,50);
    box3 = new Box(650,450,50,50);
    box4 = new Box(780,450,50,50)
   box5 = new Box(720,350,50,50);

    pig1 = new Pig(720,550);
    pig2 = new Pig(720,450);


    log1 = new Log(720,480,280,PI/2);
    log2 = new Log(720,400,280,PI/2);
    log3 = new Log(710,220,150,PI/7);
    log4 = new Log(790,220,150,-PI/7);

    ground = new Ground(600,590,1200,30);
    
     }

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();


    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();


    ground.display();



}