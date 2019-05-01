


var grid = [];
var monTableauDeGoomba =[];
var mario;

//largeur d'une cellule de la grille
var wCellule=40;

var windowsWidth = 800;
var windowsHeight = 800;

/*Complexité du jeu*/
var maxGoomba = 10;
var maxMissilesParGoomba = 5;
var freqApparitionMissiles = 50;

/*Gestion des images*/
var imgMario;
var imgGoomba;
var imgTeteDeMort;
var imgMarioVictoire;

function preload()
{
  imgMario = loadImage("img/mario200.png");
  imgGoomba = loadImage("img/goomba200.png");
  imgTeteDeMort = loadImage("img/teteDeMort.png");
  imgMarioVictoire = loadImage("img/marioVictoire.png");  
}


function setup() {

  frameRate(10);
  createCanvas(windowsWidth, windowsHeight);
  background(51);

  //nombre de colonnes
  var cols = floor(windowsWidth/wCellule);
  //nombre de lignes
  var raws = floor(windowsHeight/wCellule);

  //construction du tableau de Cells
  for (var j=0; j < raws; j++) {
    for (var i=0; i < cols; i++) {
      var cell = new Cell(i, j, wCellule);
      grid.push(cell);
    }
  }
 
  //Construction du tableau de Goomba
  for (var i = 0; i < maxGoomba; i++) {
    monTableauDeGoomba.push(new Goomba(maxMissilesParGoomba,freqApparitionMissiles));
    monTableauDeGoomba[i].initialiserVie(random(8, 12));
  }
  //création Mario
  mario = new Mario();
}

function draw() {

  background(51);
  
  //Affichage de chaque cellule de la grille
  for (var i=0; i < grid.length; i++) {
    grid[i].show();
  }

  //Dessiner chaque Goomba
  for (var i = 0; i < monTableauDeGoomba.length; i++) {
   monTableauDeGoomba[i].bouger();
  }

  //Vérification si Mario est touché par un Missile et affichage
  mario.checkMissile();
  if (mario.killed == true)
  {
    afficherFin();
    
  } else if (monTableauDeGoomba.length ==0){
    afficherVictoire();  
  } else
  {
   //Affichage de Mario
   mario.dessiner();  
  }

}

function afficherFin(){
 image(imgTeteDeMort, (width/2)-imgTeteDeMort.width/2, (height/2)-imgTeteDeMort.width/2, imgTeteDeMort.width, imgTeteDeMort.height);
}

function afficherVictoire(){
 image(imgMarioVictoire, (width/2)-imgMarioVictoire.width/2, (height/2)-imgMarioVictoire.width/2, imgMarioVictoire.width, imgMarioVictoire.height);
}

function keyPressed() {
  
  if (mario.killed == false) {
    if (keyCode === RIGHT_ARROW) {
      mario.move("R");
    } else if (keyCode === LEFT_ARROW) {
      mario.move("L");
    } else if (keyCode === UP_ARROW) {
      mario.move("U");
    } else if (keyCode === DOWN_ARROW) {
      mario.move("D");
    }  
  }
}
