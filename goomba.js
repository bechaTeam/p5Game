/*
Ajout commentaire à la classe Goomba
*/

class Goomba {


  constructor(nbMaxMissile, freqApparitionMissiles) {
    this.xpos = floor(random(1, 19))*wCellule;
    this.ypos = floor(random(1, 19))*wCellule;
    this.vie;
    this.missile = [];
    this.nbMaxMissile = nbMaxMissile;
    this.freqApparitionMissiles = freqApparitionMissiles;
  }

  dessiner() {
    image(imgGoomba, this.xpos, this.ypos, imgGoomba.width / 5, imgGoomba.height / 5);
  }

  addMissile() {
    
    var i = floor(random(0,freqApparitionMissiles));
    //Création d'un missile dans 1 cas sur 50 et seulement si pas plus de "nbMaxMissile" missiles déjà créés
    if (i==0 && this.missile.length <= this.nbMaxMissile) {
      this.missile.push(new Missile(this.xpos + wCellule/2, this.ypos + wCellule/2));
    }

    for (var j=0; j<this.missile.length; j++) {
      this.missile[j].show();
      this.missile[j].move();
    }
  }

  bouger() {

    this.addMissile();
    //Choix aléatoire d'une direction de mouvement du Goomba
    //1 = à droite
    //2 = en bas
    //3 = à gauche
    //4 = en haut
    var dir = floor(random(1, 50));

    if ( (dir === 1) && (this.xpos < 800-wCellule)) {
      this.xpos +=wCellule;
    } 
    if ( (dir === 3) && (this.xpos > wCellule )) {
      this.xpos -=wCellule;
    } 
    if ( (dir === 2) && (this.ypos < 800-wCellule)) {
      this.ypos +=wCellule;
    }
    if ( (dir === 4) && (this.ypos > wCellule)) {
      this.ypos -=wCellule;
    }
    image(imgGoomba, this.xpos, this.ypos, imgGoomba.width / 5, imgGoomba.height / 5);
  }


  initialiserVie(mavie) {
    this.vie = mavie;
  }
}
