function formingAMagicSquare(s) {
  //console.log(s);
}

formingAMagicSquare([
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2],
]);

class MatrixStrip {
  constructor(stripArr) {
    this.stripArr = stripArr;
    this.sumOfStripValues = 0;
    for (const stripElement of stripArr) {
      this.sumOfStripValues += stripElement;
    }
  }
}

class Matrix {
  constructor(matrixArr) {
    this.diagonals = [];
    let diagonal = [];
    for (let x = 0; x < matrixArr.length; x++) {
      diagonal.push(matrixArr[x][x]);
    }
    this.diagonals.push(new MatrixStrip(diagonal));

    diagonal = [];
    for (let y = matrixArr.length - 1, x = 0; y >= 0; y--, x++) {
      diagonal.push(matrixArr[x][y]);
    }
    this.diagonals.push(new MatrixStrip(diagonal));

    this.rows = [];
    this.columns = [];

    for (let x = 0; x < matrixArr.length; x++) {
      this.rows.push(new MatrixStrip(matrixArr[x]));
    }

    for (let x = 0; x < matrixArr.length; x++) {
      const column = [];
      for (let y = 0; y < matrixArr[x].length; y++) {
        column.push(matrixArr[y][x]);
      }
      this.columns.push(new MatrixStrip(column));
    }
    console.log("diagonals", this.diagonals);
    console.log("rows", this.rows);
    console.log("columns", this.columns);
  }
}

const obj = new Matrix([
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2],
]);
