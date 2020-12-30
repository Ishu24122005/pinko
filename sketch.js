function setup() {
  createCanvas(800,400);
 
for(var i=0;i<800;i=i+100){
  createSprite(i,350,20,100)
}

for(var i=0;i<800;i=i+100){
  createSprite(i,50,20,20)
  createSprite(i,100,20,20)
}




}


function draw() {
  background(255,255,255);  
 
  drawSprites();
}