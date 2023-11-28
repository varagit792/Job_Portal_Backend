import { Router } from 'express';
import { getEmployeeType } from '../controllers/employeeType.controller';

const employeeTypeRouter = Router();

employeeTypeRouter.get('/get', getEmployeeType);

export default employeeTypeRouter;