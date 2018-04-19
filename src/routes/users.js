import { Router } from 'express';

import * as userController from '../controllers/user-controller';
import { withToken, getTokenData } from '../middlewares/auth';

const router = Router();

router.get('/', [withToken, getTokenData, userController.getUsers]);

export default router;
