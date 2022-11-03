function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250);

  noStroke();

  fill('#D1D1D1'); //grau
  arc(
    200, 200,
    200, 200,
    Math.PI / 180 * -160,
    Math.PI / 180 * 0,
    CHORD
  );

  fill('#3B3561'); //blauviolet
  arc(
    200, 200,
    80, 80,
    Math.PI / 180 * -144,
    Math.PI / 180 * -16,
    CHORD
  );

  fill('#51A3A3'); //türkis
  rect(160, 50, 40, 300);

  fill('#3B3561'); //blauviolet
  arc(
    200, 200,
    200, 200,
    Math.PI / 180 * 0,
    Math.PI / 180 * -160,
    CHORD
  );
  
  fill('#D1D1D1'); //grau
  arc(
    200, 200,
    80, 80,
    Math.PI / 180 * -16,
    Math.PI / 180 * -144,
    CHORD
  );
  
  fill('#EAD94C'); //gelb
  circle(270, 270, 80)
  
  fill('#DD7373'); //rosa
  square(290, 20, 40);

  stroke('#DD7373'); //rosa
  strokeWeight(3);
  line(70, 225, 200, 225);
  line(50, 245, 180, 245);
  line(70, 265, 200, 265);

}