import { Router } from 'express';
import { postApplyJob, fetchCountApplicantWithList } from '../controllers/applyJob.controller';

const applyJobsRouter = Router();
applyJobsRouter.post('/post', postApplyJob);
applyJobsRouter.get('/countApplicantWithList/:jobId', fetchCountApplicantWithList);

export default applyJobsRouter;