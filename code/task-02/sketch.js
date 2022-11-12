
// Variablen
const sketchWidth = 400;
const sketchHight = 400;

let bgColor = 'black';
let fColor= 'rgba(118, 120, 237, 0.35)'; //Medium Slate Blue
let sColor = '#FCA311'; //Orange Web

const sWeight = 1.5;

//------------------------------

function preload(){
  // preload assets
}

function setup() {
  createCanvas(sketchWidth, sketchHight);
}

function draw() {
  background(bgColor);
  stroke(sColor);
  strokeWeight(sWeight);
  
  for (let x = 4; x > 0; x -= 1) {
    rectMode (CENTER);
    fill(fColor);
    rect(200, 200, 50 * x, 50 * x);
  }

  for (let x = 0; x <= 400; x += 50) {
    line(-200 + x, 0, 200 + x, 400);
  }

  line(400, 0, 0, 400); 

}