/**
 * Any miscellaneous or necessary functions needed in the page.
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 */

/**
 * This function returns the string representing the date until
 * a target date string.
 * @param {string} date Date string of target date
 */
function getDateStringUntil(date) {
  var target_date = new Date(date).getTime();
  var current_date = new Date().getTime();
  var seconds_left = (target_date - current_date) / 1000;

  var d = parseInt(seconds_left / 86400);
  seconds_left %= 86400;
  var h = parseInt(seconds_left / 3600);
  seconds_left %= 3600;
  var m = parseInt(seconds_left / 60);
  var s = parseInt(seconds_left % 60);
  return d + ' days, ' + h + ' hours, ' + m + ' minutes, and ' + s + ' seconds';
};
