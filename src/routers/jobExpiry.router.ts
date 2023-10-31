import { Router } from 'express';
import { getJobExpiry } from '../controllers/jobExpiry.controller';

const jobExpiryRouter = Router();

jobExpiryRouter.get('/get', getJobExpiry);

export default jobExpiryRouter;
