import Sequelize from 'sequelize';

import sequelize from './index';

import Project from './project';
import ProjectSpace from './project-space';

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

const Space = sequelize.define('Space', fields);

Space.belongsToMany(Project, { through: ProjectSpace, foreignKey: 'spaceId', otherKey: 'projectId' });

export default Space;
