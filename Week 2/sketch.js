var party = false;
var backgroundColor = [255, 255, 255];

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
}

function draw() {
  background(backgroundColor);
  if (party == true) {
    drawConfetti(20);
  }
  drawSteak();
  drawSignature();
  drawTitle();
  drawButton();
}

function drawSignature() {
  let x = windowWidth - 350;
  let y = windowHeight - 50;

  push();
  noStroke();
  if (party == true) {
    fill(random(255), random(255), random(255));
  } else {
    fill(0);
  }
  textSize(50);
  text("- Richard Way", x, y);
  pop();
}

function drawTitle() {
  push();
  textSize(50);
  noStroke();
  if (party == true) {
    fill(random(255), random(255), random(255));
  } else {
    fill(0);
  }
  text("We Have The MEATS", 0, 50);
  textSize(10);
  if (party == true) {
    text(".gif", 490, 50);
  } else {
    text(".jpg", 490, 50);
  }
  pop();
}

function drawSteak() {
  push();
  translate((windowWidth / 2) - 350, (windowHeight / 2) - 325);
  strokeWeight(0);
  fill(135, 100, 70);
  ellipse(260, 230, 180, 190);
  ellipse(330, 260, 250, 190);
  ellipse(430, 290, 200, 300);
  push();
  translate(410, 390);
  rotate(0.3);
  ellipse(0, 0, 150, 270);
  pop();
  triangle(160, 136, 250, 136, 198, 200);
  quad(145, 170, 160, 136, 200, 200, 198, 300);
  quad(200, 150, 345, 500, 450, 400, 530, 200);
  quad(370, 136, 500, 138, 530, 200, 300, 300);

  beginShape();
  fill(230, 230, 200);
  vertex(198, 136);
  vertex(327, 133);
  vertex(351, 153);
  vertex(375, 133);
  vertex(500, 138);
  vertex(474, 159);
  vertex(379, 195);
  vertex(352, 422);
  vertex(330, 199);
  vertex(270, 165);
  vertex(198, 136);
  endShape();
  pop();
}

function drawConfetti(n) {
  for (i = 0; i < n; i++) {
    let x = random(windowWidth - 20);
    let y = random(windowHeight - 20);
    let r = random(255);
    let g = random(255);
    let b = random(255);
    let s = random(10, 30);
    push();
    noStroke();
    fill(r, g, b);
    circle(x, y, s);
    pop();
  }
}

function drawButton() {
  let y = windowHeight - 70;
  mouseOnButton();
  push();
  rect(20, y, 150, 50);
  if (party == true) {
    fill(0, 200, 0);
  } else {
    fill(200, 0, 0);
  }
  textSize(25);
  text("Party Mode", 30, y + 33);
  pop();
}

function mouseClicked() {
  if (mouseButton === LEFT && mouseOnButton()) {
    if (party == false) {
      party = true;
    } else {
      party = false;
    }
  }
}

function mouseOnButton() {
  if (mouseX >= 20 && mouseX <= 170 && mouseY >= (windowHeight - 70) && mouseY <= ((windowHeight - 70) + 50)) {
    cursor(HAND);
    return true;
  } else {
    cursor(ARROW);
    return false;
  }
}