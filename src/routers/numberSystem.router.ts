import { Router } from 'express';
import { getNumberSystem } from '../controllers/numberSystem.controller';

const numberSystemRouter = Router();

numberSystemRouter.get('/get', getNumberSystem);

export default numberSystemRouter;