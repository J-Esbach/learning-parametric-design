//Farben
const bgColor = '#CFD1E9'; //Lavender (web)
const hell = '#F5F5F5'; //White smoke
const dunkel = '#383B53'; //Space cadet
const aColor1 = '#ADD8E6'; //Light blue
const aColor2 = '#ff216f'; //Rose
const aColor3 = '#86C5DA';

//Beite = 60;
//Höhe = 87;


function preload(){
  // preload assets
}

function setup() {
  createCanvas(40, 42);
}

function draw() {
  //background(bgColor);
  push();
  translate(19, 21);
  rectMode(RADIUS);
  angleMode(DEGREES);
  //Körper-----------------------------------------------
  fill(hell);
  stroke('#9798A4'); //dunkel, '#DEDEE1', #C6C7CD
  beginShape();
  vertex(-10.9, -20); //-24 -44
  vertex(6.4, -20);  //14 -44
  vertex(1.8, -16.8);  // 4 -37
  vertex(15.5, -5.9); // 34 -13
  vertex(10.9, -6.8); // 24 -15
  vertex(13.2, -1.8); // 29 -4
  vertex(10.9, -4); // 24 -8.8
  vertex(10.9, 16.8); // 24 37
  vertex(18.2, 20); // 40 44
  vertex(-10.9, 20); // -24 44
  endShape(CLOSE);
  //Schnabel---------------------------------------------
  push();
  fill(dunkel);
  noStroke();
  translate(-10.9, -4); //-24 -8.8
  beginShape();
  let t = 0;
  for(let angle = 270; angle >= 180; angle -= 5) {
    let radius = 15.5 - t; //35.2
    const x = radius * cos(angle);
    const y = radius * sin(angle);
    vertex(x, y);
    t += 0.6; // 1.4
  }
  vertex(-2.7, -2.7); //-6 -6
  vertex(0, 0); //0 0
  endShape(CLOSE);
  pop();
  //Flügel-----------------------------------------------
  //point(0, 5.5); // 0 12
  line(-4.5, -4, -4.5, 11.4); //-10, -8.8, -10, 25
  line(-4.5, 11.4, 2.3, 11.4); //-10, 25, 5, 25
  line(2.3, 11.4, 2.4, -2.3); //5, 25, 5, -5
  line(-2.3, 5.5, -2.3, 11.4); //-5, 12, -5, 25
  line(0, 5.5, 0, 11.4); //0, 12, 0, 25
  //Auge-------------------------------------------------
  fill('#A6A9D3');// #eb7a7a #FA824C '#C9EB7B'
  stroke(dunkel);
  circle(-10, -12, 5.5); //-22, -26.4, 12
  
  pop();
  //save();
}