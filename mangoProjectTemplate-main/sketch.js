
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy;
var string;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new mango(1100,100,30);
	mango2 = new mango(1160,100,20);
	mango3 = new mango(1030,150,30);
	mango4 = new mango(1000,80,30);
	mango5 = new mango(950,160,40);
  mango6 = new mango(1200,200,40);
	mango7 = new mango(950,280,40);
  mango8 = new mango(1000,330,40);
  mango9 = new mango(1100,240,25);
 

	treeObj = new tree(1050,580);

	stoneObj = new Stone(220,450,20)

  string = new String(stoneObj.body,{x:220,y:380});

	groundObject = new ground(width/2,600,width,70);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,180,350,200,300);
  
  textSize(25);
 
  text("Press space to play again !!",100,50)

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
 

  stoneObj.display();
 // string.display();


 
 groundObject.display();
  detectcollusion(mango1,stoneObj);
  detectcollusion(mango2,stoneObj);
  detectcollusion(mango3,stoneObj);
  detectcollusion(mango4,stoneObj);
  detectcollusion(mango5,stoneObj);
  detectcollusion(mango6,stoneObj);
  detectcollusion(mango7,stoneObj);
  detectcollusion(mango8,stoneObj);
  detectcollusion(mango9,stoneObj);
}






function mouseDragged(){

  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
  
  
  }

  function mouseReleased(){

    string.fly();
  
    }

    function keyPressed(){

      if(keyCode === 32){
      
        Matter.Body.setPosition(stoneObj.body,{x:220,y:400})
        string.attach(stoneObj.body);
      
      }
      
      }

      function detectcollusion(lmango,lstone){

        mangoBodyPosition = lmango.body.position;
        stoneBodyPosition = lstone.body.position;

        var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

        if(distance <= lmango.r + lstone.r){

          Matter.Body.setStatic(lmango.body,false)

        }



      }
      
     