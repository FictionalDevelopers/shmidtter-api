import { Router } from 'express';

import * as authController from '../controllers/auth-controller';
import { withToken, getRefreshokenData } from '../middlewares/auth';

const router = Router();

router.post('/register', authController.registerUser);

router.post('/login', authController.loginUser);

router.get('/refresh-tokens', [withToken, getRefreshokenData, authController.refreshTokens]);

export default router;
