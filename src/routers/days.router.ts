import { Router } from 'express';
import { getDays } from '../controllers/days.controller';

const daysRouter = Router();

daysRouter.get('/get', getDays);

export default daysRouter;