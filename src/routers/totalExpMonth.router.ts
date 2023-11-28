import { Router } from 'express';
import { getTotalExpMonth } from '../controllers/totalExpMonth.controller';

const totalExpMonthRouter = Router();

totalExpMonthRouter.get('/get', getTotalExpMonth);

export default totalExpMonthRouter;