import { Router } from 'express';
import { fetchFiltersJobs, postJobs } from '../../controllers/admin/jobs.controller';

const jobsRouter = Router();
jobsRouter.get('/filters', fetchFiltersJobs);
jobsRouter.post('/post', postJobs);

export default jobsRouter;