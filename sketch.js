var fr , mr;


function setup() {
  createCanvas(600,400);
  fr = createSprite(400, 200, 50, 50);
  mr = createSprite(200,100,30,50);
  fr.debug = true;
  mr.debug = true;
}

function draw() {
  background(0);
mr.y = World.mouseY;
mr.x = World.mouseX;

console.log(fr.x-mr.x);

if(fr.x-mr.x<fr.width/2+mr.width/2 && mr.x-fr.x<fr.width/2+mr.width/2
  && fr.y-mr.y<fr.height/2+mr.height/2 && mr.y-fr.y<fr.height/2+mr.height/2){
fr.shapeColor = "red";
mr.shapeColor = "red";
}else {
  fr.shapeColor = "grey";
mr.shapeColor = "grey";
}








  drawSprites();
}