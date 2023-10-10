import { Router } from 'express';
import { getCourse } from '../controllers/companyType.controller';

const companyTypeRouter = Router();

companyTypeRouter.get('/get', getCourse);

export default companyTypeRouter;
