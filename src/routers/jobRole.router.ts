import { Router } from 'express';
import { getJobRole } from '../controllers/jobRole.controller';

const jobRoleRouter = Router();

jobRoleRouter.get('/get', getJobRole);

export default jobRoleRouter;