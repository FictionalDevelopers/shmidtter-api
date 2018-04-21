import Project from '../database/models/project';
import * as spaceService from './space-service';

/**
 * @param {number} creatorId
 * @param {string[]} includeAttributes
 */
export async function getProjectsByCreator(creatorId, includeAttributes = []) {
  return await Project.findAll({
    where: {
      creatorId
    },
    attributes: includeAttributes
  });
}

/**
 * @param {number} creatorId
 * @param {string} projectName
 */
export async function createProject(creatorId, spaceId, projectName = null) {
  const project = await Project.create({
    creatorId,
    name: projectName
  });

  const space = await spaceService.getSpaceById(spaceId);

  space.addProject(project);

  return project;
}
