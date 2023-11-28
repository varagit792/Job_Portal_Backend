import { Router } from 'express';
import { getRoleCategory } from '../controllers/roleCategory.controller';

const roleCategoryRouter = Router();

roleCategoryRouter.get('/get', getRoleCategory);

export default roleCategoryRouter;