import { Router } from 'express';
import * as controller from './controller.js';

let router = Router();

router.post('/user', controller.createUser);
router.get('/user', controller.getUsers);

export default router;