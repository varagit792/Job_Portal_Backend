import { Router } from 'express';
import { getCity } from '../controllers/city.controller';

const cityRouter = Router();

cityRouter.get('/get', getCity);

export default cityRouter;