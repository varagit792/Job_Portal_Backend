import { Router } from 'express';
import { SaveJobList, deleteSaveJob, postSaveJob } from '../controllers/saveJob.controller';

const saveJobsRouter = Router();
saveJobsRouter.post('/post', postSaveJob);
saveJobsRouter.get('/deleteJob/:jobId/:userId', deleteSaveJob);
saveJobsRouter.get('/saveJobList/:userId', SaveJobList);

export default saveJobsRouter;