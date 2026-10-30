const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  try {
    Date.prototype.getTime.call(date);
  } catch (err) {
    throw new Error('Invalid date!');
  }
  const year = ['winter', 'spring', 'summer', 'autumn'];
  return year[Math.floor((date.getMonth() + 1) % 12 / 3)]
}

module.exports = {
  getSeason
};
