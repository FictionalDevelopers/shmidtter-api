import Sequelize from 'sequelize';

import sequelize from './index';

const fields = {
  creatorId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Users',
      key: 'id'
    },
    allowNull: false,
    onUpdate: 'cascade',
    onDelete: 'cascade'
  },
  name: {
    type: Sequelize.STRING
  }
};

export default sequelize.define('Project', fields);
