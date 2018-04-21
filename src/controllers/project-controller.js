import * as projectService from '../services/project-service';

export async function getProjects(req, res, next) {
  try {
    const { id } = req.tokenData;

    const projects = await projectService.getProjectsByCreator(id, ['id']);

    return res.json(projects);
  } catch (e) {
    return res.status(500).json({
      message: e.message
    });
  }
}

export async function createProject(req, res, next) {
  try {
    const { id } = req.tokenData;
    const { spaceId, name } = req.body;

    const project = await projectService.createProject(id, spaceId, name);

    return res.json(project);
  } catch (e) {
    return res.status(500).json({
      message: e.message
    });
  }
}
