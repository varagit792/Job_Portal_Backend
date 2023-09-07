import { Router } from 'express';
import { getJoiningDateYear } from '../controllers/joiningDateYear.controller';

const joiningDateYearRouter = Router();

joiningDateYearRouter.get('/get', getJoiningDateYear);

export default joiningDateYearRouter;