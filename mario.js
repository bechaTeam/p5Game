/*
Ceci est la classe Mario pour gérer le personnage principal.
*/

class Mario {

  constructor() {
    this.xpos = floor(windowsWidth/2);
    this.ypos = 19*wCellule;
    this.killed = false;
  }

  dessiner() {
    image(imgMario, this.xpos, this.ypos, imgMario.width / 5, imgMario.height / 5);
  }

  move(dir) {
    if (dir === "R") {
      this.xpos +=wCellule;
    } else if (dir === "L") {
      this.xpos -=wCellule;
    } else if (dir === "U") {
      this.ypos -=wCellule;
    } else if (dir === "D") {
      this.ypos +=wCellule;
    }

    //vérification si mario touche un des Goomba et si oui le goomba est enlevé de la map
    for (var i = 0; i < monTableauDeGoomba.length; i++) {            
      if (monTableauDeGoomba[i].xpos == this.xpos && monTableauDeGoomba[i].ypos == this.ypos) {
        //splice permet d'enlever le Goomba du tableau en supprimant la case du tableau qui correspond
        monTableauDeGoomba.splice(i, 1);
      }
      this.dessiner();
    }
  }

  checkMissile() {
    //on parcourt le tableau de Goomba et pour pour voir si il y a collision entre les missiles du Goomba et Mario
    for (var i = 0; i < monTableauDeGoomba.length; i++) {
      this.checkCollision(monTableauDeGoomba[i]);
    }
  }

  checkCollision(inGoomba) {
    //Vérification si le rectangle du Goomba est en intersection avec le rectangle du missile en comparant les coordonnées
    //On parcourt chaque missile du tableau de missile appartenant au Goomba
    for (var j = 0; j < inGoomba.missile.length; j++) {
      var inRectanglex = inGoomba.missile[j].xMissile;
      var inRectangley = inGoomba.missile[j].yMissile;
      var inRectanglew = inGoomba.missile[j].wMissile;
      var inRectangleh = inGoomba.missile[j].hMissile;

      if  ((this.xpos < inRectanglex + inRectanglew &&
        this.xpos + wCellule > inRectanglex &&
        this.ypos < inRectangley + inRectangleh &&
        this.ypos + wCellule > inRectangley) && (this.killed == false)) {
        this.killed = true;
      }
    }
  }
}
