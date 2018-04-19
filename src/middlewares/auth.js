import * as authService from '../services/auth-service';

export function withToken(req, res, next) {
  try {
    const [, token] = req.headers.authorization ? req.headers.authorization.split(' ') : '';

    if (!token) {
      return res.status(400).json({
        message: 'token must be provided'
      });
    }

    req.token = token;
    return next();
  } catch (e) {
    return res.status(500).json({
      message: e.message
    });
  }
}

export function getTokenData(req, res, next) {
  try {
    const token = req.token;

    req.tokenData = authService.verifyToken(token);
    return next();
  } catch (e) {
    return res.status(500).json({
      message: e.message
    });
  }
}

export function getRefreshokenData(req, res, next) {
  try {
    const token = req.token;

    req.tokenData = authService.verifyRefreshToken(token);
    return next();
  } catch (e) {
    return res.status(500).json({
      message: e.message
    });
  }
}
