import { Router } from 'express';
import { getPreferredShift } from '../controllers/preferredShift.controller';

const preferredShiftRouter = Router();

preferredShiftRouter.get('/get', getPreferredShift);

export default preferredShiftRouter;