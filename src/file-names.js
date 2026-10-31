const { NotImplementedError } = require("../lib");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let obj = {};
  const newArr = new Array(names.length);
  names.forEach((name, i) => {
    obj[name] ??= -1;
    obj[name] += 1;
    if (obj[name] === 0 && newArr.includes(name)) obj[name] += 1;
    newArr[i] = obj[name] === 0 ? name : `${name}(${obj[name]})`;
    console.log(name, i, obj, newArr);
  });
  return newArr;
}

module.exports = {
  renameFiles,
};
