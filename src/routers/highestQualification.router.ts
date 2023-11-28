import { Router } from 'express';
import { getHighestQualification } from '../controllers/highestQualification.controller';


const highestQualificationRouter = Router();

highestQualificationRouter.get('/get', getHighestQualification);

export default highestQualificationRouter;
