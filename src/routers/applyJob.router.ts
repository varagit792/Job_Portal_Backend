import { Router } from 'express';
import { postApplyJob, fetchCountApplicant, fetchApplicantList, fetchApplyJobList } from '../controllers/applyJob.controller';

const applyJobsRouter = Router();
applyJobsRouter.post('/post', postApplyJob);
applyJobsRouter.get('/countApplicant/:jobId', fetchCountApplicant);
applyJobsRouter.get('/applicantList/:jobId', fetchApplicantList);
applyJobsRouter.get('/applyJobList/:userId', fetchApplyJobList);

export default applyJobsRouter;