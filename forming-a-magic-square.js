function formingAMagicSquare(s) {
  //console.log(s);
}

formingAMagicSquare([
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2],
]);

class Matrix {
  constructor(matrixArr) {
    this.diagonals = [[], []];
    for (let x = 0; x < matrixArr.length; x++) {
      this.diagonals[0].push(matrixArr[x][x]);
    }

    for (let y = matrixArr.length - 1, x = 0; y >= 0; y--, x++) {
      this.diagonals[1].push(matrixArr[x][y]);
    }

    this.rows = [...matrixArr];
    this.columns = [];
    for (let x = 0; x < matrixArr.length; x++) {
      const column = [];
      for (let y = 0; y < matrixArr[x].length; y++) {
        column.push(matrixArr[y][x]);
      }
      this.columns.push(column);
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
