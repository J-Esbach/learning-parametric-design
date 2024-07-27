//Farben
const bgColor = '#CFD1E9'; //Lavender (web)
const gruen1 = '#C9EB7B'; //Mindaro
const gruen2 = '#A1BF5C'; //Olivine
const aColor1 = '#F5F5F5'; //White smoke
const aColor2 = '#383B53'; //Space cadet
const bColor1 = '#ff216f80'; //Rose
const bColor2 = '#eb7a7acc'; //Light coral
//Beine
let beinBreite = 15;//13
let beinLaenge = 9; //8
let beinLaenge2 = 8;//7
let beinWinkel = 90;
let bStart1 = 10;//Vorderbeine
let bStart2 = 13;
let bStart3 = -19;//Hinterbeine
let bStart4 = -14;
let bStartY = 19; //18
//Blütenschwanz
let b1Points = [
  {x: 2, y: 1}, 
  {x: 0, y: -4},
  {x: -19, y: -3},
  {x: -20, y: 2.5},
  {x: -20, y: -12}, //beides scheiße
  {x: -3, y: -11}, //z = -2
  {x: -9.5, y: -16.5}, //z = -2
  {x: -14.5, y: -12}, //z = -2
  {x: -17, y: 8}, //z = -2
  {x: -17, y: 15}, //z = -2
  {x: -10, y: 10}, //z = -2
];
let z = 2;

//-----------------------------------------------------
function setup() {
  createCanvas(41, 52);
}

function draw() {
  //background('#00000030')
  push();
  translate(23.5, 23);
  rectMode(RADIUS);
  angleMode(DEGREES);
  //Beine(hinten)----------------------------------------
  push();//Vorderbein
  translate(bStart2, bStartY);
  rotate(beinWinkel);
  fill(gruen2);
  noStroke();
  arc(-2, 0, (2 * beinLaenge2) + 4, beinBreite, 0, 90, PIE);
  noFill();
  stroke(gruen2);
  arc(-2, 0, (2 * beinLaenge2) + 4, beinBreite, 0, 90, OPEN);
  line(0, 0, 0 + beinLaenge2, 0)
  pop();
  push();//Hinterbein
  translate(bStart4, bStartY);
  rotate(beinWinkel);
  fill(gruen2);
  noStroke();
  arc(-2, 0, (2 * beinLaenge2) + 4, beinBreite, -90, 0, PIE);
  noFill();
  stroke(gruen2);
  arc(-2, 0, (2 * beinLaenge2) + 4, beinBreite, -90, 0, OPEN);
  line(0, 0, 0 + beinLaenge2, 0)
  pop();
  //Körper------------------------------------------------
  fill(gruen1);
  stroke(gruen2);
  rect(3, 0, 10.5, 22, 5, 1, 4, 0);
  //Cut Out-----------------------------------------------
  erase();
  circle(-2, -9.5, 12);
  rect(-5, -4.7, 3, 5);
  noErase();
  //Outline für Cut Out
  stroke(gruen2);
  noFill();
  arc(-2, -9.5, 12.2, 12.2, -156, 90, OPEN);
  //Auge--------------------------------------------------
  fill(aColor1);
  stroke(aColor2);
  arc(13.5, -15.8, 6, 12, -90, 90, CHORD);
  //Körperzusatz------------------------------------------
  fill(gruen1);
  noStroke();
  arc(-1.5, 22, 35.5, 51, 180, -90, PIE);
  stroke(gruen2);
  noFill();
  arc(-1.5, 22, 35.5, 51, 180, -90, OPEN);
  line(-19.3, 22, -1, 22);
  //Beine(vorne)------------------------------------------
  push();//Vorderbein
  translate(bStart1, bStartY);
  rotate(beinWinkel);
  fill(gruen1);
  noStroke();
  arc(-2, 0, (2 * beinLaenge) + 4, beinBreite, 0, 90, PIE);
  noFill();
  stroke(gruen2);
  arc(-2, 0, (2 * beinLaenge) + 4, beinBreite, 0, 90, OPEN);
  line(0, 0, 0 + beinLaenge, 0)
  pop();
  push();//Hinterbein
  translate(bStart3, bStartY);
  rotate(beinWinkel);
  fill(gruen1);
  noStroke();
  arc(0, 0, (2 * beinLaenge), beinBreite, -90, 0, PIE);
  noFill();
  stroke(gruen2);
  arc(-2, 0, (2 * beinLaenge) + 4, beinBreite, -90, 0, OPEN);
  line(0, 0, 0 + beinLaenge, 0)
  pop();
  //Hilfen-----------------
  stroke('red');
  //line(-19.3, 18, 13.5, 18);//YStart
  //line(-19.3, 26, 13.5, 26);//YEnde
  //Blüttenschwanz----------------------------------------
  noStroke();
  for(let b1 = 0; b1 <= b1Points.length; b1 ++) {
    fill(bColor1);
    beginShape();
    curveVertex(-8, -1.8);
    curveVertex(-8, -1.8);
    curveVertex(m1 = b1Points[b1].x, m2 = b1Points[b1].y);
    curveVertex(m1 +- z, m2 - z);
    curveVertex(-12, 1.3);
    curveVertex(-12, 1.3);
    endShape();
    fill(bColor2);
    beginShape();
    curveVertex(-8, -1.8);
    curveVertex(-8, -1.8);
    curveVertex(m1 = b1Points[b1].x, m2 = b1Points[b1].y);
    curveVertex(m1 +- z, m2 - z);
    curveVertex(-12, 1.3);
    curveVertex(-12, 1.3);
    endShape();
  }
  pop();
  noLoop();
}