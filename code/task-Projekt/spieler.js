class Spieler {
  constructor() {
    this.position = {
      x: 0,
      y: 0,
    }
    this.width = 15;
    this.height = 25;
    this.sides = {
      //top: this.position.y - this.height,
      bottom: this.position.y + this.height,
      //left: this.position.x - this.width,
      //right: this.position.x + this.width,
    }
    this.playerLook = 'lightgreen';
    this.speed = 3;
    this.jumpPover = 130;
    this.fallingSpeed = 0;
    this.gravity = 1;
    this.jump == false;
  }

  show() {
    fill(this.playerLook);
    rectMode(RADIUS);
    rect(this.position.x, this.position.y, this.width, this.height);
  }

  falling() {
    this.position.y += this.fallingSpeed;
    this.sides.bottom = this.position.y + this.height;

    if (this.sides.bottom + this.fallingSpeed < sketchHeight) {
      this.fallingSpeed += this.gravity;
    } else this.fallingSpeed = 0;
  }

  move() {
    if  (pressedKeys.a || pressedKeys.ArrowLeft) {  //Links
      this.position.x -= this.speed;
    }
    if (pressedKeys.d || pressedKeys.ArrowRight) { //Rechts
      this.position.x += this.speed;
    }
    
    if (pressedKeys.w || pressedKeys.ArrowUp) { //Oben
      if((this.sides.bottom == sketchHeight) && (!this.jump)){
      this.position.y -= this.jumpPover;
      this.jump = true;
      
      }
     }
      else if(this.jump) {
        this.jump = false; 
       } 
  }
  
}