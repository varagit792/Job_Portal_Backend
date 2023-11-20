import { Response, Router } from 'express';
import passport from '../config/passport';
import { sign, Secret, SignOptions } from 'jsonwebtoken';
import 'dotenv/config';
import { jwtSign } from '../utils/jwtSign';
import { registerUser, signInUser } from '../controllers/user.controller';
import { Request } from 'express-jwt';
import { SignOut } from '../controllers/signOut.controller';
import verifyUser from '../middlewares/isAuthentcated';
// import { OAuth2Client } from 'google-auth-library';
// import { O2AuthRefreshToken } from '../entities/o2AuthRefreshToken';
// import { AppDataSource } from '../config/typeorm';


let JWT_SECRET: Secret;
if (!process.env.JWT_SECRET) {
  throw new Error("cannot be undefined")
} else {
  JWT_SECRET = process.env.JWT_SECRET
};

// const oauth2Client = new OAuth2Client(
//   {
//     clientId: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     redirectUri: 'http://localhost:4000/auth/google/callback'
//   }
// );

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
  res.redirect('http://localhost:3000/')
});

authRouter.get('/signOut', passport.authenticate('jwt'), SignOut);

authRouter.get('/verifyUser', verifyUser, (req, res) => {
  console.log(req?.user);

  return res.json({ Status: "Success", Name: req?.user })
});

authRouter.get('/current_user', passport.authenticate('jwt'), (req, res) => {
  res.send({ data: req.user });
});

authRouter.post('/login', signInUser);

authRouter.post('/register', registerUser);

//routers for O2Auth
// authRouter.get('/auth', (req, res) => {
//   const authorizeUrl = oauth2Client.generateAuthUrl({
//     access_type: 'offline',
//     scope: 'https://www.googleapis.com/auth/gmail.readonly'
//   });
//   res.redirect(authorizeUrl);
// });

// authRouter.get('auth/callback', async (req, res) => {
//   const { code } = req.query;
//   if (code) {
//     const token = await oauth2Client.getToken(code as string);
//     if ('refreshToken' in token) {
//       const refreshToken = token.refreshToken as any
//       //store refresh tokens in the db
//       const o2AuthRefreshTokenRepository = AppDataSource.getRepository(O2AuthRefreshToken);
//       o2AuthRefreshTokenRepository.createQueryBuilder()
//         .update(O2AuthRefreshToken)
//         .set({
//           refreshToken: refreshToken
//         })
//     }
//   }

// })

export default authRouter;