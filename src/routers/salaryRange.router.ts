import { Router } from 'express';
import { getSalaryRange } from '../controllers/salaryRange.controller';

const salaryRangeRouter = Router();

salaryRangeRouter.get('/get', getSalaryRange);

export default salaryRangeRouter;