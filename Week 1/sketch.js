function setup() {
  createCanvas(windowWidth - 20,windowHeight - 20);
}

function draw() {
  background(255);
  drawSteak();
}

function drawSteak() {
  strokeWeight(0);
  fill(135,100,70);
  ellipse(260,230,180,190);
  ellipse(330,260,250,190);
  ellipse(430,290,200,300);
  push();
  translate(410,390);
  rotate(0.3);
  ellipse(0,0,150,270);
  pop();
  triangle(160,136,250,136,198,200);
  quad(145,170,160,136,200,200,198,300);
  quad(200,150,345,500,450,400,530,200);
  quad(370,136,500,138,530,200,300,300);
  
  beginShape();
  fill(230,230,200);
  vertex(198,136);
  vertex(327,133);
  vertex(351,153);
  vertex(375,133);
  vertex(500,138);
  vertex(474,159);
  vertex(379,195);
  vertex(352,422);
  vertex(330,199);
  vertex(270,165);
  vertex(198,136);
  endShape();
}