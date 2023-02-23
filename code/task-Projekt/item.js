class MünzenItem {
  constructor({x, y}) {
    this.radius = 15;
    this.radius2 = this.radius/1.5;
    this.rounded = 5; //für abgerundete Ecken
    this.pointR = Math.sqrt( (-15 * -15) + (-15 * -15) );
    this.position = {
      x: x,
      y: y,
    };
    this.points = {
      top: this.position.y - this.pointR,
      bottom: this.position.y + this.pointR,
      left: this.position.x - this.pointR,
      right: this.position.x + this.pointR,
    };
    this.itemLook = '#add8e6';
    this.strokeLook = '#86c5da';
    this.collected = false; 
  }
  
  
  show() {
    push();
    fill(this.itemLook);
    noStroke();
    translate(this.position.x, this.position.y); //damit das Item an der gewunschten stelle ist
    angleMode(DEGREES);
    rotate(45); //denn durch die Rotation wird das ganze Koordinatensystem gedreht
    rectMode(RADIUS);
    rect(0, 0, this.radius, this.radius, this.rounded);
    stroke(this.strokeLook);
    strokeWeight(3);
    noFill();
    rect(0, 0, this.radius2, this.radius2, this.rounded -2);
    strokeWeight(5);
    point(0, 0);
    pop();
  }  
}

//---------------------------------------------------------------------------------------------

class SchlüsselItem {
  constructor({x, y}) {
    this.radius = 10;
    this.position = {
      x: x,
      y: y,
    }
    this.sides = {
      top: this.position.y - this.radius,
      bottom: this.position.y + this.radius,
      left: this.position.x - (2.5 * this.radius),
      right: this.position.x + ((2 * this.radius) + 2),
    };
    this.itemLook = 'yellow';
    this.collected = false;
  }

  show() {
    push();
    translate(this.position.x, this.position.y);
    angleMode(DEGREES);
    rotate(-40);
    strokeWeight(3);
    stroke(this.itemLook);
    noFill();
    circle(this.radius, 0, 2 * this.radius);
    strokeWeight(3);
    line(- (2.5 * this.radius), -1, 0, -1);
    line(- (2.3 * this.radius), -1, - (2.3 * this.radius), this.radius - 2);
    line(- (1.5 * this.radius), -1, - (1.5 * this.radius), this.radius - 2);
    line(-2, -3, -2, 2);
    strokeWeight(5);
    point(this.radius, 0);
    point((2 * this.radius) + 2, 0);
    pop();
  }
}

//--------------------------------------------------------------------------------------------

class Portal {
  constructor({x, y}) {
    this.rMax = 70;
    this.position = {
      x: x,
      y: y,
    }
    //Farben
    this.rimLook = '#293241';
    this.locked = 'red';
    this.inaktive = 'darkgrey';
    this.aktive = '#caff70';//DarkOliveGreen1
    this.portalLook = 'violet';
  }

  //Inaktives Portal
  inaktiv() {
    push();
    translate(this.position.x, this.position.y);
    strokeWeight(5);
    stroke(this.rimLook);
    fill(this.inaktive);
    circle(0, 0, this.rMax);
    //rote Kreislinie
    noFill();
    stroke(this.locked);
    strokeWeight(1);
    circle(0, 0, this.rMax - 5);  
    //Portalrand
    noStroke();
    for(let r = 7; r >= 0; r -= 1) {
    angleMode(DEGREES);
    rotate(45);
    fill(this.rimLook);
    quad(-5, -this.rMax/2 + 6, -7, -this.rMax/2 - 6, 7, -this.rMax/2 - 6, 5, -this.rMax/2 + 6);
    fill(this.locked);
    circle(0, -this.rMax/2, 5);
    }
    //Schlüsselloch
    fill(this.rimLook);
    circle(0, -5, 10);
    triangle(0, -10, 5, 10, -5, 10);
    pop();
  }

  //Aktives Portal
  aktiv() {
    push();
    translate(this.position.x, this.position.y);
    strokeWeight(5);
    stroke(this.rimLook);
    fill(this.portalLook);
    circle(0, 0, this.rMax);
    //Energiestreifen
    noFill();
    strokeWeight(2);
    stroke(this.aktive);
    for(let a = this.rMax - 10; a >= 0; a -= 10) {
    arc(
      0, 0,
      a, a,
      50 * random(0, 360),
      50 * random(0, 360),
      OPEN
    );
    //frameRate(10);
    }
    //Portalrand
    noStroke();
    for(let r = 7; r >= 0; r -= 1) {
    angleMode(DEGREES);
    rotate(45);
    fill(this.rimLook);
    quad(-5, -this.rMax/2 + 6, -7, -this.rMax/2 - 6, 7, -this.rMax/2 - 6, 5, -this.rMax/2 + 6);
    fill(this.aktive);
    circle(0, -this.rMax/2, 5);
    }
    pop();
  }
}