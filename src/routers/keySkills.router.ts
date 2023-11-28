import { Router } from 'express';
import { getKeySkills } from '../controllers/keySkills.controller';

const keySkillsRouter = Router();

keySkillsRouter.get('/get', getKeySkills);

export default keySkillsRouter;