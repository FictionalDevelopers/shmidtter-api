import * as userService from '../services/user-service';

export async function getUsers(req, res, next) {
  try {
    const users = await userService.getUsers();

    return res.json({
      users
    });
  } catch (e) {
    return res.status(500).json({
      message: e.message
    });
  }
}
