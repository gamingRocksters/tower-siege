const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine,world;
var box1;

function setup() {
  createCanvas(800,400);
   engine = Engine.create();
   world = engine.world;

   stand = new Ground(405,297,200,10);
   stand1 = new Ground(600,152,180,10);
   ground = new Ground(400,height - 10, width,20 );
    
   polygon = new Polygon(50,200,40,40);

   slingShot = new Slingshot(polygon.body,{x:100, y:200});
 
   // blocks for stage1
   block1 = new Boxes(330,235,20,30);
   block2 = new Boxes(360,235,20,30);
   block3 = new Boxes(390,235,20,30);
   block4 = new Boxes(420,235,20,30);
   block5 = new Boxes(450,235,20,30);
   block6 = new Boxes(480,235,20,30);

   block7 = new Boxes(360,195,20,30);
   block8 = new Boxes(390,195,20,30);
   block9 = new Boxes(420,195,20,30);
   block10 = new Boxes(450,195,20,30);

   block11 = new Boxes(390,155,20,30);
   block12 = new Boxes(420,155,20,30);

   // blocks for stage 2
   blockk1 = new Boxes(520,101,20,30);
   blockk2 = new Boxes(550,101,20,30);
   blockk3 = new Boxes(580,101,20,30);
   blockk4 = new Boxes(610,101,20,30);
   blockk5 = new Boxes(640,101,20,30);
   blockk6 = new Boxes(670,101,20,30);

   blockk7 = new Boxes(550,80,20,30);
   blockk8 = new Boxes(580,80,20,30);
   blockk9 = new Boxes(610,80,20,30);
   blockk10 = new Boxes(640,80,20,30);

   blockk11 = new Boxes(580,30,20,30);
   blockk12 = new Boxes(610,30,20,30);

}

function draw() {
  background("#382C2C");  

  Engine.update(engine);
 text(mouseX+"."+mouseY,mouseX,mouseY);
 
   

 stand.display();
 stand1.display();
 ground.display();
 polygon.display();
 slingShot.display();
 block1.show();
 block2.show();
 block3.show();
 block4.show();
 block5.show();
 block6.show();
 block7.show();
 block8.show();
 block9.show();
 block10.show();
 block11.show();
 block12.show();

 blockk1.show();
 blockk2.show();
 blockk3.show();
 blockk4.show();
 blockk5.show();
 blockk6.show();
 blockk7.show();
 blockk8.show();
 blockk9.show();
 blockk10.show();
 blockk11.show();
 blockk12.show();

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}