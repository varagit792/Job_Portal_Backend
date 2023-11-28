import { Router } from 'express';
import { getState } from '../controllers/state.controller';

const stateRouter = Router();

stateRouter.get('/get', getState);

export default stateRouter;