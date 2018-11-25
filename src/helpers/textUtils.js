/**
 * Checks if passed arg is a number
 *
 * @param  {number} n Number to check
 * @return {boolean} Result of validation
 */
export const isNumeric = n => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

/**
 * Converts n to fixed number of decimals.
 *
 * @param  {number} n Number to convert
 * @return {string|number} Formatted string if passed argument was a number otherwise returns passed arg without change
 */
export const toFixed = (n, decimals) => {
  return isNumeric(n) ? n.toFixed(decimals) : n;
};

/**
 * Parse coordinates from a string in "lat, lon" format
 *
 * @param  {string} str text to parse
 * @return {number[]} Parsed coordinates in a [lat, lon] format
 */
export const parseCoordinates = str => {
  const geolocationRegexp = /^(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)$/;
  if (geolocationRegexp.test(str)) {
    const coords = str.split(",").map(item => item.trim());
    return coords;
  } else {
    return false;
  }
};
