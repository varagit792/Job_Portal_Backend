import { Router } from 'express';
import { getMaritalStatus } from '../controllers/maritalStatus.controller';

const maritalStatusRouter = Router();

maritalStatusRouter.get('/get', getMaritalStatus);

export default maritalStatusRouter;