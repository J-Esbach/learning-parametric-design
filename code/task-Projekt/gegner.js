class Gegner {
    constructor({x, y, moveStart, moveMax}) {
      this.width = 10;
      this.height = 16.5; 
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
      this.enemyLook = '#f5f5f5';
      this.speed = 1;
      this.moveStart = moveStart;
      this.moveMax = moveMax;
      this.fallingSpeed = 0;
      this.gravity = 1;
      this.enemy = this.points;
    }
  
    show() {
      if (!enemyImg){
        fill(this.enemyLook); 
        rectMode(RADIUS);
        rect(this.position.x, this.position.y, this.width, this.height);
      } else {
      
      if (this.speed != 1) {
        imageMode(CENTER);
        image(enemyImg, this.position.x, this.position.y, 40*0.8, 42*0.8);
      } else {
        push();
        scale(-1,1);
        imageMode(CENTER);
        image(enemyImg, this.position.x*-1, this.position.y, 40*0.8, 42*0.8);
        pop();  
      }
      }
      
      if((this.position.x - this.width <= spieler.position.x + spieler.width && //test links
        this.position.x - this.width >= spieler.position.x - spieler.width &&
        this.position.y - this.height <= spieler.position.y + spieler.width &&
        this.position.y + this.height >= spieler.position.y - spieler.width) ||
        (this.position.x + this.width >= spieler.position.x - spieler.width && //test rechts
        this.position.x + this.width <= spieler.position.x + spieler.width &&
        this.position.y - this.height <= spieler.position.y + spieler.width &&
        this.position.y + this.height >= spieler.position.y - spieler.width)) {
        this.enemyLook = '#f54e75';  
          } else 
          this.enemyLook = '#f5f5f5'; 
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