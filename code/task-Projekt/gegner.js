class Gegner {
    constructor({x, y, moveStart, moveMax}) {
      this.width = 13.5; //15
      this.height = 22; //25
      this.position = {
        x: x,
        y: y,
      }
      this.sides = {
        top: this.position.y - this.height,
        bottom: this.position.y + this.height,
        left: this.position.x - this.width,
        right: this.position.x + this.width,
      }
      this.enemyLook = 'orange';
      this.speed = 1;
      this.moveStart = moveStart;
      this.moveMax = moveMax;
      this.fallingSpeed = 0;
      this.gravity = 1;
      this.enemy = this.points;
    }
  
    show() {
      fill(this.enemyLook); 
      rectMode(RADIUS);
      rect(this.position.x, this.position.y, this.width, this.height);

      if((this.position.x - this.width <= spieler.position.x + spieler.width && //test links
        this.position.x - this.width >= spieler.position.x - spieler.width &&
        this.position.y - this.height <= spieler.position.y + spieler.width &&
        this.position.y + this.height >= spieler.position.y - spieler.width) ||
        (this.position.x + this.width >= spieler.position.x - spieler.width && //test rechts
        this.position.x + this.width <= spieler.position.x + spieler.width &&
        this.position.y - this.height <= spieler.position.y + spieler.width &&
        this.position.y + this.height >= spieler.position.y - spieler.width)) {
        this.enemyLook = 'red';  
          } else 
          this.enemyLook = 'orange';      
    }
  
    falling() {
      this.position.y += this.fallingSpeed;
      this.sides.bottom = this.position.y + this.height;
      this.sides.top = this.position.y - this.height;
  
      if (this.sides.bottom + this.fallingSpeed < sketchHeight) {
        this.fallingSpeed += this.gravity;
      } else this.fallingSpeed = 0;
    }
  
    moving() {
      this.sides.left = this.position.x - this.width;
      this.sides.right = this.position.x + this.width;

        this.position.x += this.speed;
        
        if((this.position.x > this.moveStart + this.moveMax) || (this.position.x < this.moveStart)) {
            this.speed = this.speed * -1;
        }
    }
    
  }