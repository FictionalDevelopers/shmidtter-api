import * as userService from '../services/user-service';
import * as authService from '../services/auth-service';

export async function registerUser(req, res, next) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: 'email and password are required'
      });
    }

    const user = await userService.createUser(email, password);

    if (!user) {
      return res.status(401).json({
        message: 'this email is taken'
      });
    }

    const token = authService.generateToken({ id: user.id });
    const refreshToken = authService.generateRefreshToken({ id: user.id });

    return res.json({
      token,
      refreshToken
    });
  } catch (e) {
    return res.status(500).json({
      message: e.message
    });
  }
}

export async function loginUser(req, res, next) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: 'email and password are required'
      });
    }

    const user = await userService.getUserByEmail(email);

    if (!user) {
      return res.status(401).json({
        message: 'no user with this email'
      });
    }

    const isPasswordValid = await userService.isPasswordValid(user, password);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: 'wrong password'
      });
    }

    const token = authService.generateToken({ id: user.id });
    const refreshToken = authService.generateRefreshToken({ id: user.id });

    return res.json({
      token,
      refreshToken
    });
  } catch (e) {
    return res.status(500).json({
      message: e.message
    });
  }
}

export async function refreshTokens(req, res, next) {
  try {
    const tokenData = req.tokenData;

    const newToken = authService.generateToken({ id: tokenData.id });
    const newRefreshToken = authService.generateRefreshToken({ id: tokenData.id });

    res.json({
      token: newToken,
      refreshToken: newRefreshToken
    });
  } catch (e) {
    return res.status(500).json({
      message: e.message
    });
  }
}
