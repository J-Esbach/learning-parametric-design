// Variablen
const sketchWidth = 400;
const sketchHight = 400;

let bgcolor = '#0a014f'; //Midnight Blue
let sColor= '#fae8eb'; //Lavender Blush
let fColor= '#cd9fcc'; //Lilac

const sWeight = 3;

const c = 50;

//------------------------------
function preload(){
  // preload assets
}

function setup() {
  createCanvas(sketchWidth, sketchHight);
}

function draw() {
  background(bgcolor);
  strokeWeight(sWeight);
  stroke(sColor);
  fill(fColor);

  //Quadrat
  square(250, 50, sketchWidth/4);
  
  //Kreisbogen
  arc(
    250 + sketchWidth/4, 150, 
    sketchWidth/2, sketchHight/2,
    Math.PI / 180 * 90,
    Math.PI / 180 * 180,
    PIE
    );

  //Kreise
  circle(300, 300, c);
  circle(100, 200, c * 1.5);
  noFill();
  circle(100, 200, c * 2 + 30);

  //Linien
  line(1 * c, c/2, 3 * c, sketchHight - c/2);
  line(3 * c, c/2, 5 * c, sketchHight - c/2);

}