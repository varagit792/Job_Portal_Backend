import { Router } from 'express';
import { fetchAllJobs, postJobs } from '../../controllers/admin/jobs.controller';
import passport from 'passport';

const jobsRouter = Router();

//jobsRouter.get('/all', passport.authenticate('jwt'), getJobsDetails);

jobsRouter.get('/all', fetchAllJobs);
jobsRouter.post('/post', postJobs);

export default jobsRouter;