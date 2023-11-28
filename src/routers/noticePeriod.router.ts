import { Router } from 'express';
import { getNoticePeriod } from '../controllers/noticePeriod.controller';

const noticePeriodRouter = Router();

noticePeriodRouter.get('/get', getNoticePeriod);

export default noticePeriodRouter;