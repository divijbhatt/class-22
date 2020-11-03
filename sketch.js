const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies

var world,engine
var ground,ball
function setup() {
  createCanvas(400,400);
  engine = Engine.create()
   world = engine.world
    var options = {
      isStatic: true
    }

   ground = Bodies.rectangle(200,390,200,20,options)
   World.add(world,ground)

   var options = {
    restitution:1.0
  }

   
   ball=Bodies.circle(200,100,20,options)
   World.add(world,ball)
}

function draw() {
  background("yellow");
  Engine.update(engine) 


  rectMode(CENTER) 
  fill("blue")
  rect(ground.position.x,ground.position.y,400,20)
  fill("crimson")
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)

}