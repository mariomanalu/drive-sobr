let y = 0;
let clicked = 0;
// The statements in the setup() function
// execute once when the program begins
function setup() {
  let myCanvas = createCanvas(778,512);   //windowWidth-20, windowHeight-20);
  myCanvas.parent("bigCanvas");
  //createCanvas(720, 400); // Size must be the first statement
  stroke(255); // Set line drawing color to white
  frameRate(30);
  noLoop();
}
// The statements in draw() are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read, the first
// line is executed again.
function draw() {
  background(0); // Set the background to black
  y = y - 1;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
}

function mousePressed(){
  if (clicked === 0) {
    clicked = 1;
    loop();
  }
  else {
    clicked = 0;
    noLoop();
  }

    
}