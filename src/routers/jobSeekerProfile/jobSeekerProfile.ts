import { Router } from 'express';
import { addOrUpdateEducation, getEducationDetails, updateJobSeekerProfileController, updateJobSeekerResume } from '../../controllers/jobSeeker/jobSeekerController';
import passport from '../../config/passport';

const jobSeekerProfileRouter = Router();

jobSeekerProfileRouter.post('/resume', passport.authenticate('jwt', { session: false }), updateJobSeekerResume);

jobSeekerProfileRouter.post('/education', addOrUpdateEducation);

jobSeekerProfileRouter.get('/getEducation', getEducationDetails);

jobSeekerProfileRouter.post('/profileDashboard', passport.authenticate('jwt', { session: false }), updateJobSeekerProfileController);

export default jobSeekerProfileRouter;
