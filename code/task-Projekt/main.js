// Variablen

let sketchWidth = 400;
let sketchHeight = 400;

let counter = 0; //für die späteren Items

let spieler, gegner;
let pressedKeys = {};

//-----------------------------------------------
function setup() {
  createCanvas(sketchWidth, sketchHeight);
  spieler = new Spieler();
  gegner = new Gegner();
}

function draw() {
  background('black');
  
  spieler.falling();
  spieler.move();
  spieler.show();
  
  gegner.falling();
  gegner.moving();
  gegner.show();
  
}

function keyPressed() {
  pressedKeys[key] = true;
}
function keyReleased() {
  delete pressedKeys[key];
}
