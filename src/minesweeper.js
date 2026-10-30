const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const height = matrix.length;
  const width = matrix[0].length;
  const area = Array.from({ length: height }, () => new Array(width).fill(0));
  for (let i = 0; i < height; i += 1) {
    let row = matrix[i];
    for (let j = 0; j < width; j += 1) {
      if (row[j]) {
        if (i >= 1 && j >= 1) { area[i - 1][j - 1] += 1 }
        if (i >= 1) area[i - 1][j] += 1
        if (i >= 1 && j < width - 1) area[i - 1][j + 1] += 1
        if (j >= 1) area[i][j - 1] += 1
        if (j < width - 1) area[i][j + 1] += 1
        if (i < height - 1 && j >= 1) area[i + 1][j - 1] += 1
        if (i < height - 1) area[i + 1][j] += 1
        if (i < height - 1 && j < width - 1) area[i + 1][j + 1] += 1
      }
    }
  }
  return area;
}

module.exports = {
  minesweeper
};
