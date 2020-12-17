import { Router } from "express";
import * as controller from './controller.js';
import * as FileMiddlewares from '../../middlewares/uploadFile.js'

const AssetRouter = Router();


AssetRouter.post('/', FileMiddlewares.upload.single('file'), controller.uploadFile);

AssetRouter.post('/multiple', FileMiddlewares.upload.array('files'), controller.uploadMultipleFile);

AssetRouter.get('/', controller.fetchFiles);


export default AssetRouter;