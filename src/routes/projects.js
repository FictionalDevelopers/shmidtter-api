import { Router } from 'express';

import * as projectController from '../controllers/project-controller';
import { withToken, verifyToken } from '../middlewares/auth';

const router = Router();

router.use([withToken, verifyToken]);

router.get('/', projectController.getProjects);
router.post('/', projectController.createProject);

export default router;
