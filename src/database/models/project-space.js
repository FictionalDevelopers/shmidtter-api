import Sequelize from 'sequelize';

import sequelize from './index';

import Space from './space';
import Project from './space';

const fields = {
  projectId: {
    type: Sequelize.INTEGER,
    references: {
      model: Project,
      key: 'id'
    },
    allowNull: false,
    onUpdate: 'cascade',
    onDelete: 'cascade'
  },
  spaceId: {
    type: Sequelize.INTEGER,
    references: {
      model: Space,
      key: 'id'
    },
    allowNull: false,
    onUpdate: 'cascade',
    onDelete: 'cascade'
  }
};

const ProjectSpace = sequelize.define('ProjectSpace', fields);

export default ProjectSpace;
