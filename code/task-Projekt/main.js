// Variablen

let sketchWidth = blockSize * 16; //720 Pixel
let sketchHeight = blockSize * 10; //450 Pixel

let spieler;

let enemy = [];
let enemyData = [
  {x: 10.5 * blockSize, y: 10 * blockSize - 21, moveStart: 290, moveMax: 270},
  {x: 7.5 * blockSize, y: 4.5 * blockSize - 21, moveStart: 220, moveMax: 180},  
];

let portal;
let schlüssel;
let unlocked = false;

let coins = [];
let coinsPos = [
  {x: 0.5 * blockSize, y: 2.4 * blockSize}, 
  {x: 5.5 * blockSize, y: 3.9 * blockSize},
  {x: 6.5 * blockSize, y: 3.9 * blockSize},
  {x: 8.5 * blockSize, y: 3.9 * blockSize},
  {x: 3.5 * blockSize, y: 0.6 * blockSize},
  {x: 3.5 * blockSize, y: 7.4 * blockSize},
  {x: 15.5 * blockSize, y: 4.4 * blockSize},
];
let counter = 0;

let pressedKeys = {};

//-----------------------------------------------
function setup() {
  createCanvas(sketchWidth, sketchHeight);
  spieler = new Spieler();

  for (let e = 0; e < enemyData.length; e += 1) {
    enemy.push(new Gegner({x: enemyData[e].x, y: enemyData[e].y, moveStart: enemyData[e].moveStart, moveMax: enemyData[e].moveMax}))
  }
  
  for (let c = 0; c < coinsPos.length; c += 1) {
    coins.push(new MünzenItem({x: coinsPos[c].x, y: coinsPos[c].y}));
  }

  schlüssel = new SchlüsselItem({x: 14.5 * blockSize, y: 9.45 * blockSize});

  portal = new Portal({x: 12.5 * blockSize, y: 5.3 * blockSize});
   
}

function draw() {
  background('#a1a5d3');
  noStroke();

  levelDraw();

  schlüssel.show();
  if ((schlüssel.sides.left <= spieler.position.x) && (schlüssel.sides.right >= spieler.position.x) &&
      (schlüssel.sides.bottom >= spieler.position.y) && (schlüssel.sides.top <= spieler.position.y)) {
      schlüssel.itemLook = '#00000009'; //so würde man ihn noch ganz leicht sehen oder die letzten beiden "0" dann ist er komplett weg
      unlocked = true;
  }
  if (unlocked == false) {
    portal.inaktiv();
  } else if (unlocked == true) {
    portal.aktiv();
  }
  
  for (let c = coins.length - 1; c > -1; c -= 1) {
    coins[c].show();
    if((coins[c].points.left <= spieler.position.x) && (coins[c].points.right >= spieler.position.x) && 
       (coins[c].points.bottom >= spieler.position.y) && (coins[c].points.top <= spieler.position.y)) {
      coins.splice(c, 1);
      counter++;
      console.log(counter);
    };
  }

  spieler.falling();
  spieler.move();
  spieler.show();
  kollisionen.handleCollision(spieler, definitionLevel1);

  /* für so viele Gegner wie man möchte*/
  for (let e = enemy.length - 1; e > -1; e -= 1) {
    //enemy[e].falling();
    enemy[e].moving();
    enemy[e].show();
    //kollisionen.handleCollision(enemy[e], definitionLevel1);
    if((enemy[e].sides.top < spieler.position.y + spieler.height && enemy[e].sides.top >= spieler.Yold) && 
       (enemy[e].sides.left <= spieler.position.x && enemy[e].sides.right >= spieler.position.x)){
      enemy.splice(e, 1);
    }
  }

  //Counteranzeige
  textFont('Courier New');
  textAlign(LEFT);
  textSize(20);
  fill('white');
  text('Münzen: ', blockSize/3, blockSize/2);
  text(counter, 2.3 * blockSize, blockSize/2);
}

function keyPressed() {
  pressedKeys[key] = true;
}
function keyReleased() {
  delete pressedKeys[key];
}
