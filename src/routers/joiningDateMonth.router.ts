import { Router } from 'express';
import { getJoiningDateMonth } from '../controllers/joiningDateMonth.controller';

const joiningDateMonthRouter = Router();

joiningDateMonthRouter.get('/get', getJoiningDateMonth);

export default joiningDateMonthRouter;