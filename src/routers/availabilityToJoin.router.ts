import { Router } from 'express';
import { getAvailabilityToJoin } from '../controllers/availabilityToJoin.controller';

const availabilityToJoinRouter = Router();

availabilityToJoinRouter.get('/get', getAvailabilityToJoin);

export default availabilityToJoinRouter;
