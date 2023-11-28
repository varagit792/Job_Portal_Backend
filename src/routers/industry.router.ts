import { Router } from 'express';
import { getIndustry } from '../controllers/industry.controller';

const industryRouter = Router();

industryRouter.get('/get', getIndustry);

export default industryRouter;