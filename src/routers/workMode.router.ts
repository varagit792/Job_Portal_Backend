import { Router } from 'express';
import { getWorkMode } from '../controllers/workMode.controller';

const workModeRouter = Router();

workModeRouter.get('/get', getWorkMode);

export default workModeRouter;