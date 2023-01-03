class Gegner {
    constructor() {
      this.width = 15;
      this.height = 25;
      this.position = {
        x: 50,
        y: sketchHeight - this.height,
      }
      this.sides = {
        //top: this.position.y - this.height,
        bottom: this.position.y + this.height,
        //left: this.position.x - this.width,
        //right: this.position.x + this.width,
      }
      this.enemyLook = 'orange';
      this.speed = 1;
      this.moveStart = this.position.x;
      this.moveMax = 150;
      this.fallingSpeed = 0;
      this.gravity = 1;
    }
  
    show() {
      fill(this.enemyLook);
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
  
    moving() {
        this.position.x += this.speed;
        
        if((this.position.x > this.moveStart + this.moveMax) || (this.position.x < this.moveStart)) {
            this.speed = this.speed * -1;
        }
    }
    
  }