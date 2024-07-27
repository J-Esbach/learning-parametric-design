const radius = 45;
const r = (2*radius/5)*1.9;
const r2 = r/2;
const rounded = 5;
const backgColor = '#CFD1E9';
const blockLook = '#565CB0';
const strokeLook = '#373B73';
const blockLook2 = '#565CB060';
const strokeLook2 = '#373B7320';
const s = 6;

function preload(){
  // preload assets
}

function setup() {
  createCanvas(2*radius*4, 2*radius*2);
  
}

function draw() {
  background(backgColor);
  noStroke();
  rectMode(RADIUS);
  strokeCap(ROUND);

  for(let bx = 0; bx < 4; bx += 1) {
    for(let by = 0; by < 2; by += 1) {
      push();
      fill(blockLook2);
      rect((2*bx*radius)+radius, (2*by*radius)+radius, radius, radius);
      stroke(strokeLook2); 
      strokeWeight(s);
      strokeCap(ROUND);
      noFill();
      rect((2*bx*radius)+radius, (2*by*radius)+radius, r, r); //äußeres Quadrat
      rect((2*bx*radius)+radius, (2*by*radius)+radius, r2, r2); //inneres Quadrat
      pop();
    }
  }

  push();//voller Block
  fill(blockLook);
  rect((2*1*radius)+radius, (2*0*radius)+radius, radius, radius);
  stroke(strokeLook);
  strokeWeight(s);
  noFill();
  rect((2*1*radius)+radius, (2*0*radius)+radius, r, r);
  rect((2*1*radius)+radius, (2*0*radius)+radius, r2, r2);
  pop();
  
  push();//hallber Block unten
  fill(blockLook);
  rect((2*2*radius)+radius, (2*0*radius)+1.5*radius, radius, radius/2);
  stroke(strokeLook);
  strokeWeight(s);
  noFill();
  rect((2*2*radius)+radius, (2*0*radius)+1.5*radius, r, r2-s);
  pop();

  push();//halber Block oben
  fill(blockLook);
  rect((2*3*radius)+radius, (2*0*radius)+0.5*radius, radius, radius/2);
  stroke(strokeLook);
  strokeWeight(s);
  noFill();
  rect((2*3*radius)+radius, (2*0*radius)+0.5*radius, r, r2-s);
  pop();

  push();//unten nach oben
  fill(blockLook);
  beginShape();
  vertex((2*0*radius), (2*1*radius)+2*radius);
  vertex((2*0*radius)+2*radius, (2*1*radius));
  vertex((2*0*radius)+2*radius, (2*1*radius)+2*radius);
  endShape(CLOSE);
  stroke(strokeLook);
  strokeWeight(6);
  noFill();
  beginShape();
  vertex((2*0*radius)+2*(r2-s/2), (2*1*radius)+2*radius-(r2-s));
  vertex((2*0*radius)+2*radius-(r2-s), (2*1*radius)+2*(r2-s/2));
  vertex((2*0*radius)+2*radius-(r2-s), (2*1*radius)+2*radius-(r2-s));
  endShape(CLOSE);
  pop();

  
  push();//oben nach unten
  fill(blockLook);
  beginShape();
  vertex((2*1*radius), (2*1*radius)); 
  vertex((2*1*radius)+2*radius, (2*1*radius)+2*radius);
  vertex((2*1*radius), (2*1*radius)+2*radius);
  endShape(CLOSE);
  stroke(strokeLook);
  strokeWeight(6);
  noFill();
  beginShape();
  vertex((2*1*radius)+(r2-s), (2*1*radius)+2*(r2-s/2)); 
  vertex((2*1*radius)+2*radius-2*(r2-s/2), (2*1*radius)+2*radius-(r2-s));
  vertex((2*1*radius)+(r2-s), (2*1*radius)+2*radius-(r2-s));
  endShape(CLOSE);
  pop();


  push();//unten nach oben (hängend)
  fill(blockLook);
  beginShape();
  vertex((2*2*radius), (2*1*radius)); 
  vertex((2*2*radius)+2*radius, (2*1*radius));
  vertex((2*2*radius), (2*1*radius)+2*radius);
  endShape(CLOSE);
  stroke(strokeLook);
  strokeWeight(6);
  noFill();
  beginShape();
  vertex((2*2*radius)+(r2-s), (2*1*radius)+(r2-s)); 
  vertex((2*2*radius)+2*radius-2*(r2-s/2), (2*1*radius)+(r2-s));
  vertex((2*2*radius)+(r2-s), (2*1*radius)+2*radius-2*(r2-s/2));
  endShape(CLOSE);
  pop();


  push();//oben nach unten (hängend)
  fill(blockLook);
  beginShape();
  vertex((2*3*radius), (2*1*radius));
  vertex((2*3*radius)+2*radius, (2*1*radius));
  vertex((2*3*radius)+2*radius, (2*1*radius)+2*radius);
  endShape(CLOSE);
  stroke(strokeLook);
  strokeWeight(6);
  noFill();
  beginShape();
  vertex((2*3*radius)+2*(r2-s/2), (2*1*radius)+(r2-s));
  vertex((2*3*radius)+2*radius-(r2-s), (2*1*radius)+(r2-s));
  vertex((2*3*radius)+2*radius-(r2-s), (2*1*radius)+2*radius-2*(r2-s/2));
  endShape(CLOSE);
  pop();

  noLoop();
  //save();
}