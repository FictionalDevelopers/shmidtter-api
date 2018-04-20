/**
 * @param {string} list
 * @param {string} separator
 * @returns {string[]}
 */
export function listToArray(list = '', separator = ',') {
  return list.split(separator);
}
