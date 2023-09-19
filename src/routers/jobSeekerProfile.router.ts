import { Router } from 'express';
import {
  addOrUpdateEducation,
  getEducationDetails,
  updateJobSeekerProfileController,
  getJobSeekerProfileController,
  updateJobSeekerResume,
  updateJobSeekerProfilePicture,
  deleteJobSeekerResume,
  addOrUpdateCareerProfile,
  getCareerProfileDetails,
  deleteJobSeekerProfilePicture,
  addOrUpdatePersonalDetails,
  updateJobSeekerProfileBasicDetailsController,
  deletePersonalDetailsLanguages,
  ProfileIndicator
} from '../controllers/jobSeekerProfile.controller';
import passport from '../config/passport';
import { keySkillsController, keySkillsGetController } from '../controllers/keySkills.controller';

const jobSeekerProfileRouter = Router();

jobSeekerProfileRouter.put('/resume', passport.authenticate('jwt', { session: false }), updateJobSeekerResume);
jobSeekerProfileRouter.put('/resumeDelete', passport.authenticate('jwt', { session: false }), deleteJobSeekerResume);
jobSeekerProfileRouter.put('/profilePicture', passport.authenticate('jwt', { session: false }), updateJobSeekerProfilePicture);
jobSeekerProfileRouter.put('/profilePictureDelete', passport.authenticate('jwt', { session: false }), deleteJobSeekerProfilePicture);
jobSeekerProfileRouter.post('/education', addOrUpdateEducation);
jobSeekerProfileRouter.get('/getEducation', getEducationDetails);
jobSeekerProfileRouter.put('/profileDashboard', passport.authenticate('jwt', { session: false }), updateJobSeekerProfileController);
jobSeekerProfileRouter.get('/getProfileDashboard', passport.authenticate('jwt', { session: false }), getJobSeekerProfileController);

jobSeekerProfileRouter.post('/keySkills', passport.authenticate('jwt', { session: false }), keySkillsController);
jobSeekerProfileRouter.get('/keySkills', passport.authenticate('jwt', { session: false }), keySkillsGetController);
jobSeekerProfileRouter.post('/careerProfile', passport.authenticate('jwt', { session: false }), addOrUpdateCareerProfile);
jobSeekerProfileRouter.get('/getCareerProfile', passport.authenticate('jwt', { session: false }), getCareerProfileDetails);
jobSeekerProfileRouter.put('/profileBasicDetails', passport.authenticate('jwt'), updateJobSeekerProfileBasicDetailsController);

jobSeekerProfileRouter.post('/personalDetails', passport.authenticate('jwt', { session: false }), addOrUpdatePersonalDetails);
jobSeekerProfileRouter.delete('/deletePersonalDetailsLanguages', passport.authenticate('jwt', { session: false }), deletePersonalDetailsLanguages);

jobSeekerProfileRouter.get('/profileIndicator', passport.authenticate('jwt', { session: false }), ProfileIndicator);

export default jobSeekerProfileRouter;
