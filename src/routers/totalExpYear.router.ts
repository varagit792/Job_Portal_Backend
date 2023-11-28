import { Router } from 'express';
import { getTotalExpYear } from '../controllers/totalExpYear.controller';

const totalExpYearRouter = Router();

totalExpYearRouter.get('/get', getTotalExpYear);

export default totalExpYearRouter;