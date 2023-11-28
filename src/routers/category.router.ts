import { Router } from 'express';
import { getCategory } from '../controllers/category.controller';

const categoryRouter = Router();

categoryRouter.get('/get', getCategory);

export default categoryRouter;