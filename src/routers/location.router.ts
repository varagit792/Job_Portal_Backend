import { Router } from 'express';
import { getLocation } from '../controllers/location.controller';

const locationRouter = Router();

locationRouter.get('/get', getLocation);

export default locationRouter;