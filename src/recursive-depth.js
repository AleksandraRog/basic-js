const { NotImplementedError } = require("../lib");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    const stringarr = JSON.stringify(arr);

    let ind1 = 0;
    let ind2 = 0;
    for (let i = 0; i < stringarr.length; i += 1) {
      if (stringarr[i] === "[") {
        ind2 += 1;
      }
      if (stringarr[i] === "]") {
        ind2 -= 1;
      }
      if (ind2 > ind1) {
        ind1 = ind2;
      }
    }
    return ind1;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
