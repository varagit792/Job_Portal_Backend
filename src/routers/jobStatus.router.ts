import { Router } from 'express';
import { getJobStatus } from '../controllers/jobStatus.controller';

const jobStatusRouter = Router();

jobStatusRouter.get('/get', getJobStatus);

export default jobStatusRouter;
