import { Router } from 'express';
import { getJobType } from '../controllers/jobType.controller';

const jobTypeRouter = Router();

jobTypeRouter.get('/get', getJobType);

export default jobTypeRouter;