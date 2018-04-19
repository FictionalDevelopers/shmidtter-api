import User from '../database/models/user';

import { hashString, compare } from '../utils/hash';

export async function getUsers() {
  return await User.findAll();
}

export async function createUser(email, password) {
  const hashedPassword = await hashString(password);

  const [user, wasCreated] = await User.findOrCreate({
    where: {
      email
    },
    defaults: {
      password: hashedPassword
    }
  });
  return wasCreated ? user : null;
}

export async function getUserByEmail(email) {
  return await User.findOne({
    where: {
      email
    }
  });
}

export async function isPasswordValid(user, password) {
  return await compare(password, user.password);
}
