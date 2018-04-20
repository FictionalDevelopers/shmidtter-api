import Space from '../database/models/space';

export async function getSpaces() {
  return await Space.findAll();
}

/**
 * @param {number} creatorId
 * @param {string[]} includeAttributes
 */
export async function getSpacesByCreator(creatorId, includeAttributes = []) {
  return await Space.findAll({
    where: {
      creatorId
    },
    attributes: includeAttributes
  });
}

/**
 * @param {number} creatorId
 * @param {string} spaceName
 */
export async function createSpace(creatorId, spaceName = null) {
  return await Space.create({
    creatorId,
    name: spaceName
  });
}
