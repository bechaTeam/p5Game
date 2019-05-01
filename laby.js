class Cell {

  constructor(i, j, w) {
    this.iCell = i;
    this.jCell = j;
    this.largeurCellule = w;
  }

  show() {
    stroke(255);
    noFill();
    rect(this.iCell*this.largeurCellule, this.jCell*this.largeurCellule, this.largeurCellule, this.largeurCellule);
  }
}
