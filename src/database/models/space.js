import Sequelize from 'sequelize';

import sequelize from './index';

const fields = {
  creatorId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Users',
      key: 'id'
    },
    onUpdate: 'cascade',
    onDelete: 'cascade'
  },
  name: {
    type: Sequelize.STRING
  }
};

const Space = sequelize.define('Space', fields);

export default Space;
