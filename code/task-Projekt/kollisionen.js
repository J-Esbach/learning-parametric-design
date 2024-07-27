const kollisionen = {
  
  offset: 0.001,

  "0":function(object, oBx, oBy) { 
    if (this.collideTop(object, oBy)) return;
    if (this.collideLeft(object, oBx)) return;
    if (this.collideRight(object, oBx)) return;
    this.collideBottom(object, oBy);
  },

  "\\":function(object, oBx, oBy) {
    if (this.collideSlopeTop(object, oBx, oBy, 1, 0)) return;
    if (this.collideLeft(object, oBx)) return;
    let bottom = oBy * blockSize + blockSize;
    let right = oBx * blockSize + blockSize;
    if (object.position.x < right && object.Xold >= right && object.position.y < bottom && object.position.y + object.height > bottom) {
      object.speed = 0;
      object.position.x = right;
    }
    this.collideBottom(object, oBy);
  }, 

  "/":function(object, oBx, oBy) {
    if (this.collideSlopeTop(object, oBx, oBy, -1, blockSize)) return;
    if (this.collideRight(object, oBx)) return;
    let bottom = oBy * blockSize + blockSize;
    let left = oBx * blockSize;
    if (object.position.x > left && object.Xold <= left && object.position.y < bottom && object.position.y + object.height > bottom) {
      object.speed = 0;
      object.position.x = left;
    }
    this.collideBottom(object, oBy);
  }, 

  "_":function(object, oBx, oBy) { 
  if (this.collideTop(object, oBy, blockSize * 0.5)) return;
  if (object.position.y + object.height > oBy * blockSize + blockSize * 0.5) {
    if (this.collideLeft(object, oBx)) return;
    if (this.collideRight(object, oBx)) return;
  }
  this.collideBottom(object, oBy);
},

//---------------------------------------------------------------------------------

collideBottom:function(object, oBy, yOffset = blockSize) {
  let bottom = oBy * blockSize + yOffset;
  if (object.position.y - object.height < bottom && object.Yold - object.height >= bottom) {
    object.jumpPover = 0; //fallingSpeed
    object.position.y = bottom + object.height + this.offset;
    //object.playerLook = '#0360e5';
    return true;
  } return false;
},


collideLeft:function(object, oBx) {
  let left = oBx * blockSize; 
  if (object.position.x + object.width > left && object.Xold + object.width <= left) {
    object.speed = 0;
    object.position.x = left - object.width - this.offset;
    return true;
  } return false;
},

collideRight:function(object, oBx) {
  let right = oBx * blockSize + blockSize;
  if (object.position.x - object.width < right && object.Xold - object.width >= right) { 
    object.speed = 0;
    object.position.x = right + object.width + this.offset;
    return true;
  } return false;
},

collideTop:function(object, oBy, yOffset = 0) {
  let top = oBy * blockSize + yOffset;
  if (object.position.y + object.height > top && object.Yold + object.height <= top) {
    //object.jump = false;
    object.fallingSpeed = 0;
    object.position.y = top - object.height - this.offset;
    return true;
  } return false;
},

collideSlopeTop:function(object, oBx, oBy, slope, yOffset) {
  let originX = oBx * blockSize;
  let originY = oBy * blockSize + yOffset;
  let currentX = (slope < 0) ? object.position.x + object.width - originX : object.position.x - object.width - originX;
  let currentY = object.position.y + object.height - originY;
  let oldX = (slope < 0) ? object.Xold + object.width - originX : object.Xold - object.width - originX;
  let oldY = object.Yold + object.height - originY;
  let currentCrossProduct = currentX * slope - currentY;
  let oldCrossProduct = oldX * slope - oldY;
  let top = (slope < 0) ? oBy * blockSize + blockSize + yOffset * slope : oBy * blockSize + yOffset;
  if ((currentX < 0 || currentX > blockSize) && (object.position.y + object.height > top && object.Yold + object.height <= top || currentCrossProduct < 1 && oldCrossProduct > -1)) {
    //object.jump = false;
    object.fallingSpeed = 0;
    object.position.y = top - object.height - this.offset;
    return true;
  } else if (currentCrossProduct < 1 && oldCrossProduct > -1) {
    //object.jump = false;
    object.fallingSpeed = 0;
    object.position.y = oBy * blockSize + slope * currentX + yOffset - object.height - 2 * this.offset;
    return true;
  } return false;
},

handleCollision:function(object, definitionLevel) {

  var oBx, oBy, oCharakter;

  /* TEST TOP */

  
  oBx = Math.floor((object.position.x - object.width) / blockSize);// The oBx under the left side of the object:
  oBy = Math.floor((object.position.y - object.height) / blockSize);// The oBy under the top side of the object:
  
  oCharakter  = definitionLevel[oBy][oBx];// We get the tile oCharakter under the top left corner of the object:

  if (oCharakter != ' ') this[oCharakter](object, oBx, oBy);// If it's not a walkable tile, we do naroBy phase collision.

  oBx = Math.floor((object.position.x + object.width) / blockSize);// The oBx under the right side of the object:
  oCharakter  = definitionLevel[oBy][oBx];// Value under the top right corner of the object.

  if (oCharakter != ' ') this[oCharakter](object, oBx, oBy);

  /* TEST BOTTOM */

  
  oBx = Math.floor((object.position.x - object.width) / blockSize);// The oBx under the left side of the object:
  oBy = Math.floor((object.position.y + object.height) / blockSize);// The oBy under the bottom side of the object:
  oCharakter  = definitionLevel[oBy][oBx];

  if (oCharakter != ' ') this[oCharakter](object, oBx, oBy);

  oBx = Math.floor((object.position.x + object.width) / blockSize);// The oBx under the right side of the object:
  oCharakter  = definitionLevel[oBy][oBx];

  if (oCharakter != ' ') this[oCharakter](object, oBx, oBy);  

  /* TEST LEFT */

  
  oBx = Math.floor((object.position.x - object.width) / blockSize);// The oBx under the left side of the object:
  oBy = Math.floor((object.position.y - object.height) / blockSize);// Top side oBy:
  
  oCharakter  = definitionLevel[oBy][oBx];

  if (oCharakter != ' ') this[oCharakter](object, oBx, oBy);

  oBy = Math.floor((object.position.y + object.height) / blockSize);// Bottom side oBy:
  oCharakter = definitionLevel[oBy][oBx];

  if (oCharakter != ' ') this[oCharakter](object, oBx, oBy);

  /* TEST RIGHT */

  oBx = Math.floor((object.position.x + object.width) / blockSize);// The oBx under the right side of the object:
  oBy = Math.floor((object.position.y - object.height) / blockSize);// Top side oBy:
  
  oCharakter  = definitionLevel[oBy][oBx];

  if (oCharakter != ' ') this[oCharakter](object, oBx, oBy);

  oBy = Math.floor((object.position.y + object.height) / blockSize);// Bottom side oBy:
  oCharakter = definitionLevel[oBy][oBx];

  if (oCharakter != ' ') this[oCharakter](object, oBx, oBy);

},
}