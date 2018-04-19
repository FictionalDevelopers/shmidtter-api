import Sequelize from 'sequelize';

import sequelize from './index';

const fields = {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
};

const User = sequelize.define('User', fields);

export default User;
