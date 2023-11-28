import { Router } from 'express';
import { getCourseType } from '../controllers/courseType.controller';

const courseTypeRouter = Router();

courseTypeRouter.get('/get', getCourseType);

export default courseTypeRouter;
