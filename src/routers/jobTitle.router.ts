import { Router } from 'express';
import { getJobTitle } from '../controllers/jobTitle.controller';

const jobTitleRouter = Router();

jobTitleRouter.get('/get', getJobTitle);

export default jobTitleRouter;