import { Router } from 'express';
import { getPassOutYear } from '../controllers/passOutYear.controller';

const passOutYearRouter = Router();

passOutYearRouter.get('/get', getPassOutYear);

export default passOutYearRouter;