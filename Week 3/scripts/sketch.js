var party = false;
var backgroundColor = [255, 255, 255];
var steaks = [];
var imageStrings = [];
var images = [];
var loadedImages = [];
var objectDisplay = [];
var imageMap = {};
var funFont;

function preload() {
  funFont = loadFont("./fonts/Banana.ttf");
  imageStrings = loadStrings('./images/index.txt', loadImages);
  //console.log(imageStrings);

}

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  imageMode(CENTER);
  //console.log(images);
  //displayImages();
}

function draw() {
  background(backgroundColor);
  if (party == true) {
    drawConfetti(20);
  }
  //Temporary steak class call. Needs tweaking.
  displayImages();
  drawSteak(1, null, null, 1); //count, x pos, y pos, scale. Defaults to center of the canvas if null values passed.
  drawSignature();
  drawTitle();
  drawButton();
}

function drawSignature() {
  let x = windowWidth - 350;
  let y = windowHeight - 50;

  push();
  noStroke();
  textFont(funFont);
  if (party == true) {
    fill(random(255), random(255), random(255));
  } else {
    fill(0);
  }
  textSize(50);
  text("- Richard Way", x, y);
  pop();
}

function loadImages() {
  for (i=0;i<imageStrings.length;i++) {
    let imgPath = './images/' + imageStrings[i];
    let img = loadImage(imgPath, function() {
      // push image into images array after loading
      images.push(new ImageClass(img, createVector((windowWidth - 20) / 2, (windowHeight - 20) / 2)));
      
      //extract the image name from the filename and save it to imageMap as a key
      /*let imgFilename = imageStrings[i].split('.').slice(0, -1).join('.');
      imageMap[imgFilename] = images[images.length - 1];*/
    });
  }
}

function displayImages() {
  for (i=0;i<images.length;i++) {
    objectDisplay.push(images[i].display());
  }
  //console.log(objectDisplay);
}

function drawSteak(count, tranX, tranY, tranS) {
  for (i = 0; i < count; i++) {
    steaks[i] = new Steak();
    if (typeof tranX !== "number" || typeof tranY !== "number") {
      tranX = width / 2;
      tranY = height / 2;
    }
  }

  for (i = 0; i < steaks.length; i++) {
    steaks[i].display(tranX, tranY, tranS);
  }
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