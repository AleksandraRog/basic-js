const { NotImplementedError } = require("../lib");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!(members instanceof Array)) {
    return false;
  }
  return members
    .map((v) => (typeof v === "string" ? v.trim()[0] : ""))
    .filter((v1) => Boolean(v1))
    .map((v2) => v2.toUpperCase())
    .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    .join("");
}

module.exports = {
  createDreamTeam,
};
