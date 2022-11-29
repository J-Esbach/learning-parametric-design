// Variablen
const sketchWidth = 800;
const sketchHight = 425;

let spx = 50;
let spy = 50;


//Farben
const colorArray = [ 
  '#403d39', //Black Olive
  '#6d676e', //Dim Gray
  '#fbfffe', //white
  '#96031a', //Carmine
  '#faa916'  //Bright Yellow Crayola
]

const tSize = 10;
const textColor = 'Black';

const sliderSize = 200;
const sliderStart = sketchWidth-250;

//Slider
let gbSlider;
let hz1Slider;
let az1Slider;
let hz2Slider;
let kSlider;
let bmSlider;
let az2Slider;
let hz3Slider;
let az3Slider;

let radio;

//Maße
let gh = 280; //Höhe des Regals
let gb = 400; //Breite des Regals

let minh = 10;

let az1 = 10;
let az2 = 5;
let az3 = 10;

let baBreite = gb/az1;

//----------------------------------------------------

function preload(){
  // preload assets
}

function setup() {
  createCanvas(sketchWidth, sketchHight);

  //Die Inputs----------------------------------------  
  gbSlider = createSlider(2*baBreite, gb, random(2*baBreite, gb), baBreite);
  gbSlider.position(sliderStart, 25);
  gbSlider.size(sliderSize);
  
  //oben
  hz1Slider = createSlider(0, gh, random(10, gh), 10);
  hz1Slider.position(sliderStart, 65);
  hz1Slider.size(sliderSize);
  
  az1Slider = createSlider(1, az1, random(1, az1), 1);
  az1Slider.position(sliderStart, 105);
  az1Slider.size(sliderSize);
    
  //mitte
  hz2Slider = createSlider(0, gh, random(10, gh), 10);
  hz2Slider.position(sliderStart, 145);
  hz2Slider.size(sliderSize);
  
  kSlider = createSlider(gb/8, gb-gb/8, random(gb/8, gb-gb/8), 10);
  kSlider.position(sliderStart, 185);
  kSlider.size(sliderSize);

  bmSlider = createSlider(30, gb/2, random(10, gb/2), 10);
  bmSlider.position(sliderStart, 225);
  bmSlider.size(sliderSize);

  az2Slider = createSlider(1, az2, random(1, az2), 1);
  az2Slider.position(sliderStart, 265);
  az2Slider.size(sliderSize);
  
  //unten
  hz3Slider = createSlider(0, gh, random(10, gh), 10);
  hz3Slider.position(sliderStart, 305);
  hz3Slider.size(sliderSize);  

  az3Slider = createSlider(1, az3, random(1, az3), 1);
  az3Slider.position(sliderStart, 345);
  az3Slider.size(sliderSize);
 
  //Farbauswahl zum Klicken----------------------------
  radio = createRadio();
  radio.option(colorArray[0],'Schwarz');
  radio.option(colorArray[1],'Grau');
  radio.option(colorArray[2],'Weiß');
  radio.option(colorArray[3],'Karminrot');
  radio.option(colorArray[4],'Gelb');
  radio.position(20, sketchHight-45);
  textAlign(LEFT);

}

function draw() {
  background(225);
  
  //Slider Überschriften---------------------------------
  textSize(textSize);
  fill(textColor);
  noStroke();

  const schriftzugArray =[
    'Gesamtbreite des Regals',
    'Höhe der oberen Zeile',
    'Anzahl der Fächer in der oberen Zeile',
    'Höhe der mittleren Zeile',
    'Position des Kreismoduls',
    'Breite des Regalmoduls',
    'Anzahl der Regalbretter',
    'Höhe der unteren Zeile',
    'Anzahl der Fächer in der unteren Zeile'
  ]
  for (ü = -1; ü < 9; ü += 1) {
    text(schriftzugArray[ü], sliderStart, 20 + (ü * 40));
  }

  text('Farben', 30, sketchHight-60);
  
  stroke('Black');
  let fillColor = radio.value();
  fill(fillColor);

  
  //Bedingungen-----------------------------------

  let H_oben = hz1Slider.value();
  let H_mitte = hz2Slider.value();
  let H_unter = hz3Slider.value();
  let H_gesamt = H_oben+H_mitte+H_unter;

  while (H_gesamt > gh) {
    H_oben = H_oben-1;
    H_mitte = H_mitte-1;
    H_unter = H_unter-1;
    H_gesamt = H_oben + H_mitte + H_unter;
  }

  //-----

  let B_gesamt = gbSlider.value();
  let A_1 = az1Slider.value();
  let A_2 = az2Slider.value();
  let A_3 = az3Slider.value();
  let K_position = kSlider.value();

  if (B_gesamt < 360 && A_1 > 7) {
    A_1 = A_1-2;
  } 
  if (B_gesamt < 280 && A_1 > 5) { 
    A_1 = A_1-2;
  } 
  if (B_gesamt < 200 && A_1 > 3) {
    A_1 = A_1-2;
  }
  if (B_gesamt < 160 && A_1 > 2) {
    A_1 = A_1-1;
  }
  if (B_gesamt < 120 && A_1 > 1) {
    A_1 = A_1-1;
  }
  
  
  if (B_gesamt < 360 && A_3 > 7) {
    A_3 = A_3-2;
  }
  if (B_gesamt < 280 && A_3 > 5) { 
    A_3 = A_3-2;
  }
  if (B_gesamt < 200 && A_3 > 3) {
    A_3 = A_3-2;
  }
  if (B_gesamt < 160 && A_3 > 2) {
    A_3 = A_3-1;
  }
  if (B_gesamt < 120 && A_3 > 1) {
    A_3 = A_3-1;
  }


  if (H_mitte < 110 && A_2 > 4) {
    A_2 = A_2 -1;
  }
  if (H_mitte < 70 && A_2 > 3) {
    A_2 = A_2 -1;
  }
  if (H_mitte < 50 && A_2 > 2) {
    A_2 = A_2 -1;
  }
  if (H_mitte < 30 && A_2 > 1) {
    A_2 = A_2 -1;
  }


  if (K_position < bmSlider.value()){
    K_position = bmSlider.value();
  }
  

  //Das Regal-------------------------------------
  let Breite = B_gesamt/A_1;
  let Breite2 = B_gesamt/A_3;
  let Bretter = H_mitte/A_2;
  

  //obere Zeile
  for (let z1 = 0; z1 < A_1; z1 += 1) {
    rect(spx+(z1*Breite), spy, Breite, H_oben);
  }

  //untere Zeile muss noch überarbeitet werden
  for (let z3 = 0; z3 < A_3; z3 += 1) {
    rect(spx+(z3*Breite2), spy + H_oben + H_mitte, Breite2, H_unter);
  }

  //mittlere Zeile muss überarbeitet werden
  circle(spx + gb/8 + K_position, spy + H_oben + (H_mitte/2), H_mitte);
   
  for (let z2 = 0; z2 < A_2; z2 += 1) {
    rect(spx, spy + H_oben+(Bretter*z2), bmSlider.value(), Bretter);
    line(spx, spy + H_oben+(Bretter*(1+z2)), 
         spx + gb/8 + K_position + H_mitte/2, spy + H_oben+(Bretter*(1+z2)));
  }

}