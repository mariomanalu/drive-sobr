let y = 0;
let line_move = 0;
let scene = 0;
let diameter;
let angle = 0;
let bg;
let amount = 5;
let increase = 1;
let font,
  fontsize = 40;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('assets/SourceSansPro-Regular.ttf');
  bg =  loadImage('assets/bg.png');

}


// The statements in the setup() function
// execute once when the program begins
function setup() {
  let myCanvas = createCanvas(778,512);   //windowWidth-20, windowHeight-20);
  myCanvas.parent("bigCanvas");
  
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
  
}
// The statements in draw() are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read, the first
// line is executed again.
function draw() {

  switch (scene){
    case 0:
      textAlign(CENTER);
      drawWordsScene0(width * 0.5);
      break;
    case 1:
      stroke(255); // Set line drawing color to white
      frameRate(30);
      
      background(0); // Set the background to black
      y = y - 1;
      if (y < 0) {
        y = height;
      }
      strokeWeight(5);
      stroke("white");
      line(0, y, width, y);

      strokeWeight(5);
      stroke("red");
      line(0, height/2, width, height/2);
      break;
    case 2:   
      background('white');
      textAlign(CENTER);
      drawWordsScene2(width * 0.5);
      break;
    case 3:
      background('white');
      textAlign(CENTER);
      drawWordsScene3(width * 0.5);
      break;
    case 4:
      background(0);
      diameter = height - 50;
      noStroke();
      fill(255, 204, 0);
      let d1 = 10 + (sin(angle) * diameter) / 2 + diameter / 2;
      let d2 = 10 + (sin(angle + PI / 2) * diameter) / 2 + diameter / 2;
      let d3 = 10 + (sin(angle + PI) * diameter) / 2 + diameter / 2;

      ellipse(0, height / 2, d1, d1);
      ellipse(width / 2, height / 2, d2, d2);
      ellipse(width, height / 2, d3, d3);

      angle += 0.02;
      break;
    case 5:
      background('white');
      textAlign(CENTER);
      drawWordsScene5(width * 0.5);
      break;
    case 6:
      background('white');
      textAlign(CENTER);
      drawWordsScene6(width * 0.5);
      break;
    case 7:
      background(0);
      colorMode(HSB, 360, 100, 100, 100);
      imageMode(CENTER);
      if(amount < 100 && increase) {
        amount += 5;
      }
      else if (amount == 100 && increase) {
        increase = 0;
      }
      else if (amount > 0 && !increase) {
        amount -= 5;
      }
      else if (amount == 0 && !increase) {
        increase = 1;
      }
      drawingContext.filter = 'blur('+str(amount)+'px)';
      image(bg, width/2, height/2, 640, 360);
      break;
    case 8:
      amount = 0;
      drawingContext.filter = 'blur('+str(amount)+'px)';
      background('white');
      textAlign(CENTER);
      drawWordsScene8(width * 0.5);
      break;
    case 9:
        background('white');
        textAlign(CENTER);
        drawWordsScene9(width * 0.5);
        break;
  }
}

function mousePressed(){
  if (line_move === 0) {
    line_move = 1;
    loop();
  }
  else if (line == 1) {
    line_move = 0;
    noLoop();
    scene += 1;
  }
  else {
    scene += 1;
  }
}

function drawWordsScene0(x) {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position
  fill(0);
  text('You will be presented with two lines.', x, 80);
  text('Your mission is to stop the white line', x, 130);
  text('precisely when it is above the red line.', x, 180);
  text('Click to begin.', x, 300);
}

function drawWordsScene2(x) {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position
  fill(0);
  stroke('white');
  text('Your accuracy is 88%.', x, 80);
  text('Your response time is 0.8s.', x, 150);
  text('Click to go to the next game.', x, 300);
}

function drawWordsScene3(x) {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position
  fill(0);
  stroke('white');
  text('You will be presented with three circles.', x, 80);
  text('Your mission is to stop when the middle circle', x, 130);
  text('is at its maximum size.', x, 180);
  text('Click to begin.', x, 300);
}

function drawWordsScene5(x) {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position
  fill(0);
  stroke('white');
  text('Your accuracy is 92%.', x, 80);
  text('Your response time is 5.2s', x, 150);
  text('Click to go to the next game.', x, 300);
}

function drawWordsScene6(x) {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position
  fill(0);
  stroke('white');
  text('You will be presented with a picture.', x, 80);
  text('Your mission is to stop when the picture', x, 130);
  text('is at its maximum focus.', x, 180);
  text('Click to begin.', x, 300);
}

function drawWordsScene8(x) {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position
  fill(0);
  stroke('white');
  text('Your accuracy is 89%.', x, 80);
  text('Your response time is 3.5s', x, 150);
  text('Click to see your result.', x, 300);
}

function drawWordsScene9(x) {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position
  fill(0);
  stroke('white');
  text('Overall, your accuracy is decent,', x, 80);
  text('but your response time is concerning.', x, 130);
  text('We would recommend that you do not drive.', x, 180);
  text('We will notify your emergency contacts.', x, 300);
}