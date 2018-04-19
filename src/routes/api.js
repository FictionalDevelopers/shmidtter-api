import { Router } from 'express';

const router = Router();

router.get('/', async (req, res, next) => {
  return res.json({
    message: 'hello there'
  });
});

export default router;
