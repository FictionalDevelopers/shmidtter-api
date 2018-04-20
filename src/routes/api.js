import { Router } from 'express';

import authRoutes from './auth';
import usersRoutes from './users';
import spacesRoutes from './spaces';

const router = Router();

router.use('/auth', authRoutes);
router.use('/users', usersRoutes);
router.use('/spaces', spacesRoutes);

export default router;
