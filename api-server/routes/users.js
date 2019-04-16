import  express from 'express';
import { create, authenticate } from '../controllers/users';

const router = express.Router();

router.post('/register', create);
router.post('/authenticate', authenticate);

export default router;
