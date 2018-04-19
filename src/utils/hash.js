import bcrypt from 'bcrypt';

/**
 * @param {string} string
 * @returns {Promise<string>}
 */
export async function hashString(string) {
  return await bcrypt.hash(string, 10);
}

/**
 * @param {string} plain
 * @param {string} hash
 * @returns {Promise<boolean>}
 */
export async function compare(plain, hash) {
  return await bcrypt.compare(plain, hash);
}
