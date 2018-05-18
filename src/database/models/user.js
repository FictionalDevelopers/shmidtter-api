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
  },
  name: {
    type: Sequelize.STRING,
  },
};

export default sequelize.define('User', fields);
