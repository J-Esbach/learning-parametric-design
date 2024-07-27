// Variablen
const sketchWidth = 400;
const sketchHight = 400;

let color1 = '#fe5f55'; //Orange Red Crayola
let color2= '#577399'; //Blue Yonder
let color3= '#f7f7ff'; //Ghost White
let color4 = '#495867'; //Black Coral
let bgcolor = '#bdd5ea'; //Beau Blue


const sWeight = 3;

const a = 50;

//------------------------------

function preload(){
  // preload assets
}

function setup() {
  createCanvas(sketchWidth, sketchHight);
}

function draw() {
  background(bgcolor);
  stroke(color4);
  strokeWeight(sWeight);


  line(0, sketchHight/3, sketchWidth/3, 0);
  line(sketchWidth/3, 0, 0, sketchHight);
  line(0, sketchHight, sketchWidth, 0);
  line(sketchWidth/2 + (1.5 * a), sketchHight/2 + a/2, sketchWidth, sketchHight - a);
  line(a, sketchHight - a, sketchWidth, sketchHight - a);


  fill(color2);
  beginShape(); //Quadrat
   vertex(sketchWidth/2 - a/2, sketchHight/2 - (1.5 * a));
   vertex(sketchWidth/2 + (1.5 * a), sketchHight/2 - (1.5 * a));
   vertex(sketchWidth/2 + (1.5 * a), sketchHight/2 + a/2);
   vertex(sketchWidth/2 - a/2, sketchHight/2 + a/2);
  endShape(CLOSE);
 
  fill(color1);
  beginShape(); //oben links
   vertex(sketchWidth/2 - a/2, sketchHight/2 - a/2);
   vertex(sketchWidth/2 - a/2, sketchHight/2 - (1.5 * a));
   vertex(sketchWidth/2 + (1.5 * a) - a, sketchHight/2 - (1.5 * a));
  endShape(CLOSE);

  beginShape(); //unten rechts
   vertex(sketchWidth/2 + (1.5 * a) - a, sketchHight/2 + a/2);
   vertex(sketchWidth/2 + (1.5 * a), sketchHight/2 - a/2);
   vertex(sketchWidth/2 + (1.5 * a), sketchHight/2 + a/2);
  endShape(CLOSE); 

  fill(color3);
  beginShape(); //oben rechts
   vertex(sketchWidth/2 + (1.5 * a) - a, sketchHight/2 - (1.5 * a));
   vertex(sketchWidth/2 + (1.5 * a), sketchHight/2 - (1.5 * a));
   vertex(sketchWidth/2 + (1.5 * a), sketchHight/2 - a/2);
  endShape(CLOSE);

  beginShape(); //unten links
   vertex(sketchWidth/2 - a/2, sketchHight/2 + a/2);
   vertex(sketchWidth/2 - a/2, sketchHight/2 - a/2);
   vertex(sketchWidth/2 + (1.5 * a) - a, sketchHight/2 + a/2);
  endShape(CLOSE);

}