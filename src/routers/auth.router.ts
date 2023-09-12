import { Response, Router } from 'express';
import passport from '../config/passport';
import { sign, Secret, SignOptions } from 'jsonwebtoken';
import 'dotenv/config';
import { jwtSign } from '../utils/jwtSign';
import { registerUser, signInUser } from '../controllers/user.controller';
import { Request } from 'express-jwt';

let JWT_SECRET: Secret;
if (!process.env.JWT_SECRET) {
  throw new Error("cannot be undefined")
} else {
  JWT_SECRET = process.env.JWT_SECRET
};

const signInOptions: SignOptions = {
  // RS256 uses a public/private key pair. The API provides the private key
  // to generate the JWT. The client gets a public key to validate the
  // signature
  expiresIn: '30d'
};
const authRouter = Router();
authRouter.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);
authRouter.get('/google/callback',
  passport.authenticate('google',
    {
      failureRedirect: 'http://localhost:3000/registration', session: true
    }),
  jwtSign
)
authRouter.get('/logout', (req: Request, res: Response, next) => {
  res.cookie('token', null);
  return req.user
});

authRouter.get('/current_user', passport.authenticate('jwt'), (req, res) => {
  res.send({ data: req.user });
});

authRouter.post('/login', signInUser);

authRouter.post('/register', registerUser);

export default authRouter;