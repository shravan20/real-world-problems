import Router from 'express';
import controller from './controller';

let router = Router();

router.post('/user', controller.createUser);

module.exports = router;