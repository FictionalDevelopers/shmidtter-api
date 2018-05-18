import User from '../database/models/user';

import { compare, hashString } from '../utils/hash';

export async function getUsers() {
  return await User.findAll();
}

export async function createUser({ email, password, name }) {
  const hashedPassword = await hashString(password);

  const [user, wasCreated] = await User.findOrCreate({
    where: {
      email
    },
    defaults: {
      password: hashedPassword,
      name,
    }
  });
  return wasCreated ? user : null;
}

export async function getUserByEmail(email, attributes = ['id']) {

  return await User.findOne({
    where: {
      email,
    },
    ...(attributes.length && ({ attributes })),
  });
}

export async function isPasswordValid(user, password) {
  return await compare(password, user.password);
}
