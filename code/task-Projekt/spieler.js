class Spieler {
  constructor() {
    this.position = {
      x: 2 * blockSize,
      y: 2 * blockSize,
    }
    this.width = 13; //15
    this.height = 20;//25
    this.sides = {
      top: this.position.y - this.height,
      bottom: this.position.y + this.height,
      left: this.position.x - this.width,
      right: this.position.x + this.width,
    }   
    this.playerLook = 'lightgreen';
    this.speed = 3;
    this.jumpPover = 130;
    this.fallingSpeed = 0;
    this.gravity = 1;
    this.jump == false;
    this.Xold = this.position.x;
    this.Yold = this.position.y;
  }

  /*
  update() {
    show();
    falling();
    move();

  }*/

  show() {
    fill(this.playerLook);
    rectMode(RADIUS);
    rect(this.position.x, this.position.y, this.width, this.height);
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

