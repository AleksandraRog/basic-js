const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  const newarr = [];
  let delnextind = null;

  function discardnext(i) {
    delnextind = i + 1
  }
  function discardprev(i) {
    if (i - 1 < 0 || i - 1 === delnextind) return;
    newarr.pop()
  }
  function doublenext(i) {
    if (i + 1 > arr.length - 1) return;
    newarr.push(arr[i + 1]);
  }
  function doubleprev(i) {
    if (i - 1 < 0 || i - 1 === delnextind) return;
    newarr.push(arr[i - 1]);
  }

  const map = {
    '--discard-next': discardnext,
    '--discard-prev': discardprev,
    '--double-next': doublenext,
    '--double-prev': doubleprev
  }

  for (let i = 0; i < arr.length; i += 1) {
    if (map[arr[i]]) {
      map[arr[i]](i);
    } else {
      if (delnextind !== i) {
        newarr.push(arr[i])
      }
    }
  }
  return newarr;
}

module.exports = {
  transform
};
