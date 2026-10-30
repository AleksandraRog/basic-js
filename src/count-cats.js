const { NotImplementedError } = require("../lib");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let countCats = 0;
  matrix.forEach((arr) => {
    arr.forEach((v) => {
      if (v === "^^") countCats += 1;
    });
  });
  return countCats;
}

module.exports = {
  countCats,
};
