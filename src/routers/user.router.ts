import { Router } from 'express';
import { getUserDetails } from '../controllers/user.controller';
import passport from 'passport';

const userRouter = Router();

userRouter.get('/getDetails',passport.authenticate('jwt'), getUserDetails);

export default userRouter;