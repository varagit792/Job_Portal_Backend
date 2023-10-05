import { Router } from 'express';
import { fetchAllJobs, fetchJobDetails, postJobs } from '../../controllers/employer/jobs.controller';
import passport from 'passport';

const jobsRouter = Router();

//jobsRouter.get('/all', passport.authenticate('jwt'), getJobsDetails);

jobsRouter.get('/all/:offset?', fetchAllJobs);
jobsRouter.post('/post', postJobs);
jobsRouter.get('/get/:id', fetchJobDetails);

export default jobsRouter;