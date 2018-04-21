import { Router } from 'express';

import authRoutes from './auth';
import usersRoutes from './users';
import spacesRoutes from './spaces';
import projectsRoutes from './projects';

const router = Router();

router.use('/auth', authRoutes);
router.use('/users', usersRoutes);
router.use('/spaces', spacesRoutes);
router.use('/projects', projectsRoutes);

export default router;
