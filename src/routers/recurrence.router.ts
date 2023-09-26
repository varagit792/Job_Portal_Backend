import { Router } from 'express';
import { getRecurrence } from '../controllers/recurrence.controller';

const recurrenceRouter = Router();

recurrenceRouter.get('/get', getRecurrence);

export default recurrenceRouter;