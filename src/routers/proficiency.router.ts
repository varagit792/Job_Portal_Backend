import { Router } from 'express';
import { getProficiency } from '../controllers/proficiency.controller';

const proficiencyRouter = Router();

proficiencyRouter.get('/get', getProficiency);

export default proficiencyRouter;