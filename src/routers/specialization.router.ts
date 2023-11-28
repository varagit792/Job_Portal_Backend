import { Router } from 'express';
import { getSpecialization } from '../controllers/specialization.controller';

const specializationRouter = Router();

specializationRouter.get('/get', getSpecialization);

export default specializationRouter;