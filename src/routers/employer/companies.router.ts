import { Router } from 'express';
import { fetchAllCompanies, fetchCompanyDetails, postCompanies } from '../../controllers/employer/companies.controller';

const companiesRouter = Router();

//jobsRouter.get('/all', passport.authenticate('jwt'), getJobsDetails);

companiesRouter.get('/all/:offset?', fetchAllCompanies);
companiesRouter.post('/post', postCompanies);
companiesRouter.get('/get/:id', fetchCompanyDetails);

export default companiesRouter;