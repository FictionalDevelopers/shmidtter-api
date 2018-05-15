import Space from '../database/models/space';

/**
 * @param {number} creatorId
 * @param {string[]} attributes
 */
export async function getSpacesByCreator(creatorId, attributes = []) {
  return await Space.findAll({
    where: {
      creatorId,
    },
    ...(attributes.length && { attributes }),
  });
}

/**
 * @param {number} spaceId
 */
export async function getSpaceById(spaceId) {
  return await Space.findById(spaceId);
}

/**
 * @param {number} creatorId
 * @param {string} spaceName
 */
export async function createSpace(creatorId, spaceName = null) {
  return await Space.create({
    creatorId,
    name: spaceName,
  });
}
