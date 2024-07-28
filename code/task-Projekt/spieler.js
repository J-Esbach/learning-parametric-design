class Spieler {
  constructor() {
    this.position = {
      x: 2.2 * blockSize,
      y: 2 * blockSize,
    }
    this.width = 16; //16
    this.height = 22;//20
    this.sides = {
      top: this.position.y - this.height,
      bottom: this.position.y + this.height,
      left: this.position.x - this.width,
      right: this.position.x + this.width,
    }   
    this.playerLook = '#c9eb7b';
    this.speed = 3;
    this.jumpPover = 130;
    this.fallingSpeed = 0;
    this.gravity = 1;
    this.jump == false;
    this.Xold = this.position.x;
    this.Yold = this.position.y;
    this.direction = 1;
  }

  show() {
    if (!spielerImg){
      fill(this.playerLook);
      rectMode(RADIUS);
      rect(this.position.x, this.position.y, this.width, this.height);
    } else {
    
      if (this.direction === 1) { //Schaut nach rechts
        imageMode(CENTER);
        image(spielerImg, this.position.x-2, this.position.y, 41*0.9, 52*0.9);
      } else if (this.direction === -1){  //Schaut nach links
        push();
        translate(this.position.x+2, this.position.y);
        scale(-1,1);
        imageMode(CENTER);
        image(spielerImg, 0, 0, 41*0.9, 52*0.9);
        pop();  
      }
    }
    
  }

  falling() {
    this.Yold = this.position.y;

    this.position.y += this.fallingSpeed;
    this.sides.bottom = this.position.y + this.height;

    //if (this.sides.bottom + this.fallingSpeed < sketchHeight) {
    if ((kollisionen.collideBottom) || (kollisionen.oCharakter = ' ') /*|| (this.position.y - this.height - kollisionen.offset <= 0)*/) {
      this.fallingSpeed += this.gravity;
    } else this.fallingSpeed = 0;
    
    //Kollision mit Spielfeldboden
    if (this.position.y + this.height >= sketchHeight) {
      this.fallingSpeed = 0;
      this.position.y = sketchHeight - this.height - kollisionen.offset;
    }
  }

  move() {
    this.Xold = this.position.x;

    this.sides.left = this.position.x - this.width;
    this.sides.right = this.position.x + this.width;

    if  (pressedKeys.a || pressedKeys.ArrowLeft) {  //Links
      if (this.sides.left >= 0) {
      this.speed = 3;
      this.position.x -= this.speed;
      }
      //Kollision mit linker Spielfeldseite
      if (this.position.x - this.width <= 0) {
        this.position.x = this.width + kollisionen.offset;
      }
      this.direction = -1;
    }

    if (pressedKeys.d || pressedKeys.ArrowRight) { //Rechts
      if(this.sides.right <= sketchWidth) {
      this.speed = 3;
      this.position.x += this.speed;
      }
      //Kollision mit rechter Spielfeldseite
      if (this.position.x + this.width >= sketchWidth) {
        this.position.x = sketchWidth - this.width - kollisionen.offset;
      }
      this.direction = 1;
    }
    
    if (pressedKeys.w || pressedKeys.ArrowUp) { //Oben
      if ((kollisionen.collideTop && !this.jump) || (kollisionen.collideSlopeTop && !this.jump) || (!this.jump && this.sides.bottom == sketchHeight)){
      this.jumpPover = 130; //130
      this.position.y -= this.jumpPover;
      this.jump = true;
      //Kollision mit Spielfelddecke
      if (this.position.y - this.height <= 0) {
        this.position.y = 0 + this.height + kollisionen.offset;
      }
      }
    } else if(this.jump) {
        this.jump = false; 
      }

    console.log();
  }
}

