const { NotImplementedError } = require("../lib");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = String(n);
  const arr = str.split("").map((v) => Number(v));
  if (arr[0] < arr[1]) {
    return Number(arr.slice(1).join(""));
  }
  const min = Math.min(...arr);
  const targetIndex = arr.lastIndexOf(min);
  arr[targetIndex] = "";
  const answ = arr.join("");
  return Number(answ);
}

module.exports = {
  deleteDigit,
};
