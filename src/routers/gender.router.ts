import { Router } from 'express';
import { getGender } from '../controllers/gender.controller';

const genderRouter = Router();

genderRouter.get('/get', getGender);

export default genderRouter;