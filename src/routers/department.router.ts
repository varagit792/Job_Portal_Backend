import { Router } from 'express';
import { getDepartment } from '../controllers/department.controller';

const departmentRouter = Router();

departmentRouter.get('/get', getDepartment);

export default departmentRouter;
