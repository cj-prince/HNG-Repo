import { Router } from 'express';
import * as route from './controller.js'
import * as dataValidator from './data.validata.js';


const router = Router();
router.get(
  '/',
  dataValidator.validateData(dataValidator.getSchema, 'query'),
  route.getController
);


export default router;