const { NotImplementedError } = require("../lib");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arr = domains
    .map((item) => {
      let varr = item.split(".");
      let narr = [];
      for (let i = 0; i < varr.length; i += 1) {
        narr.push("." + varr.slice(i).reverse().join("."));
      }
      return narr;
    })
    .flatMap((x) => x)
    .reduce((acc, v) => {
      acc[v] = (acc[v] || 0) + 1;
      return acc;
    }, {});

  return arr;
}

module.exports = {
  getDNSStats,
};
