import { Router } from 'express';
import { getEducationType } from '../controllers/educationType.controller';

const educationTypeRouter = Router();

educationTypeRouter.get('/get', getEducationType);

export default educationTypeRouter;