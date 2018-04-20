import * as spaceService from '../services/space-service';

import { listToArray } from '../utils/data';

export async function getSpaces(req, res, next) {
  try {
    const { id } = req.tokenData;
    const { include: attributesList } = req.query;
    const attributes = listToArray(attributesList);
    const spaces = await spaceService.getSpacesByCreator(id, attributes);

    return res.json(spaces);
  } catch (e) {
    return res.status(500).json({
      message: e.message
    });
  }
}

export async function createSpace(req, res, next) {
  try {
    const { name } = req.body;
    const { id } = req.tokenData;

    const space = await spaceService.createSpace(id, name);

    return res.json(space);
  } catch (e) {
    return res.status(500).json({
      message: e.message
    });
  }
}
