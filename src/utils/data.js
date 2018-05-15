/**
 * @param {string} list
 * @param {string} separator
 * @returns {string[]}
 */
export function listToArray(list = '', separator = ',') {
  if (list.length === 0) {
    return [];
  }
  return list.split(separator);
}
