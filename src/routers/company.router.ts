import { Router } from 'express';
import { getCompany } from '../controllers/company.controller';

const companyRouter = Router();

companyRouter.get('/get', getCompany);

export default companyRouter;
