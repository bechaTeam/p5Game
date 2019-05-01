class Missile {

  constructor(x, y) {
    this.xMissile = x;
    this.yMissile = y;
    this.wMissile = 10;
    this.hMissile = 10;
    
    //Détermination de la trajectoire du missile
    this.dirx = floor(random([-1,0,1]));
    if (this.dirx == 0) {
     this.diry = floor(random([-1,1]));  
    } else {
     this.diry = floor(random([-1,0,1]));
    }
  }

  show() {
    fill(50);
    rect(this.xMissile, this.yMissile, this.wMissile, this.hMissile);
  }

  move() {
    this.xMissile = this.xMissile + this.dirx;
    this.yMissile = this.yMissile + this.diry;
  }
}
