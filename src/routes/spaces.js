import { Router } from 'express';

import * as spaceController from '../controllers/space-controller';
import { withToken, verifyToken } from '../middlewares/auth';

const router = Router();

router.use([withToken, verifyToken]);

router.get('/', spaceController.getSpaces);

router.post('/', spaceController.createSpace);

export default router;
