import { Router } from 'express';
import { getUniversityInstitute } from '../controllers/universityInstitute.controller';

const universityInstituteRouter = Router();

universityInstituteRouter.get('/get', getUniversityInstitute);

export default universityInstituteRouter;