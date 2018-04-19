import jwt from 'jsonwebtoken';

import { TOKEN_SECRET, TOKEN_EXPIRE, REFRESH_TOKEN_SECRET, REFRESH_TOKEN_EXPIRE } from '../consts/auth';

/**
 * @param {*} data
 * @returns {string}
 */
export function generateToken(data) {
  return jwt.sign(data, TOKEN_SECRET, {
    expiresIn: TOKEN_EXPIRE
  });
}

/**
 * @param {*} data
 * @returns {string}
 */
export function generateRefreshToken(data) {
  return jwt.sign(data, REFRESH_TOKEN_SECRET, {
    expiresIn: REFRESH_TOKEN_EXPIRE
  });
}

/**
 * @param {string} token
 * @returns {*}
 */
export function verifyToken(token) {
  return jwt.verify(token, TOKEN_SECRET);
}

/**
 * @param {string} token
 * @returns {*}
 */
export function verifyRefreshToken(token) {
  return jwt.verify(token, REFRESH_TOKEN_SECRET);
}
