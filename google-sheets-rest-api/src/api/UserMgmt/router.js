import { Router } from 'express';
import * as controller from './controller.js';

let router = Router();

router.get('/', (req,res)=>res.send({ status: "checked" }));
router.post('/user', controller.createUser);

export default router;