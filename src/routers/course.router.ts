import { Router } from 'express';
import { getCourse } from '../controllers/course.controller';

const courseRouter = Router();

courseRouter.get('/get', getCourse);

export default courseRouter;
