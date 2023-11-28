import { Router } from 'express';
import { fetchJobsList, postJobs, fetchJobDetails } from '../../controllers/employer/jobs.controller';

const jobsRouter = Router();
jobsRouter.get('/list', fetchJobsList);
jobsRouter.post('/post', postJobs);
jobsRouter.get('/get/:id', fetchJobDetails);

export default jobsRouter;