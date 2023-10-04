import { Router } from 'express';
import { fetchFiltersJobs, postJobs, fetchJobDetails } from '../../controllers/admin/jobs.controller';

const jobsRouter = Router();
jobsRouter.get('/filters', fetchFiltersJobs);
jobsRouter.post('/post', postJobs);
jobsRouter.get('/get/:id', fetchJobDetails);

export default jobsRouter;