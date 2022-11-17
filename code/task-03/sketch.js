// Variablen
const sketchWidth = 400;
const sketchHight = 400;

let color1 = '#b5ffe1'; //Magic Mint
let color2 = '#388697'; //Metallic Seaweed
let color3 = '#08415c'; //Indigo Dye
let bgcolor = '#ebbab9'; //Baby Pink
let color4 = '#dc7278'; //Candy Pink

const sWeight = 1.5;
const sWeight_arc = 30;

const rk = 220;

//------------------------------
function preload(){
  // preload assets
}

function setup() {
  createCanvas(sketchWidth, sketchHight);
}

function draw() {
  background(bgcolor);
  stroke(color3);


  //Viertel Kreisbogen --------------------
  const Kreisbogen = [];
  for (let k = 0; k < 3; k += 1) {
    noFill();
    strokeWeight(sWeight_arc);
    strokeCap(SQUARE);
    
    //Kreisbogenverlängerung
      let startpunkt = (200 + rk/2) + (sWeight_arc * k);

      line(startpunkt, 60, startpunkt, 200);
      line(110, startpunkt, 200, startpunkt);
    //----------------------

    Kreisbogen.push([
    arc(
    sketchWidth/2, sketchHight/2,
    rk + ((sWeight_arc * 2) * k), rk + ((sWeight_arc * 2) * k),
    Math.PI / 180 * 0,
    Math.PI / 180 * 90,
    OPEN
    )
    ]);
    
     
    //überarbeiten durch verbinden mit Arraywerten
    if (k === -1) {
      stroke(color3);
    } else if (k === 0) {
      stroke(color2);
    } else if (k === 1) {
      stroke(color1);
    }
  }


  //Eingerehte Vierecke-----------------------
  for (e = 0; e < 4; e += 1) {
    strokeWeight(sWeight);
    stroke(color4);

    let verschiebung = 15 * e;

    beginShape();
    vertex(30 + verschiebung, 50 + (verschiebung * 2));
    vertex(270 - verschiebung, 200 + verschiebung);
    vertex(180, 20 + (verschiebung * 2));
    vertex(30 + verschiebung, 330);
    endShape(CLOSE);
  }

  //extras
  circle(295, 60, 30);
  circle(310, 40, 10);
  circle(340, 320, 30);

  
}