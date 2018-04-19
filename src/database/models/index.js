import Sequelize from 'sequelize';

import { DB_NAME, DB_USER, DB_PASSWORD } from '../../consts/db';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;
