import { Router } from 'express';
import { addOrUpdateJobSeekerProfileEmployment } from '../controllers/jobSeekerProfileEmployment.controller';

const jobSeekerProfileEmploymentRouter = Router();

jobSeekerProfileEmploymentRouter.post('/post', addOrUpdateJobSeekerProfileEmployment);

export default jobSeekerProfileEmploymentRouter;
