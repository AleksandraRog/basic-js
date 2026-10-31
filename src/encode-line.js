const { NotImplementedError } = require("../lib");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let char = "";
  let count = 0;
  let newstr = "";
  for (let i = 0; i < str.length; i += 1) {
    if (char === str[i]) {
      count += 1;
    } else {
      newstr += `${count > 1 ? count : ""}${char}`;
      count = 1;
      char = str[i];
    }
  }
  newstr += `${count > 1 ? count : ""}${char}`;
  return newstr;
}

module.exports = {
  encodeLine,
};
