import { Router } from 'express';
import { postApplyJob, fetchCountApplicant, fetchApplicantList } from '../controllers/applyJob.controller';

const applyJobsRouter = Router();
applyJobsRouter.post('/post', postApplyJob);
applyJobsRouter.get('/countApplicant/:jobId', fetchCountApplicant);
applyJobsRouter.get('/applicantList/:jobId', fetchApplicantList);

export default applyJobsRouter;