import googleAuth from 'passport-google-oauth20'
import jwtPassport from 'passport-jwt';
import localPassport from 'passport-local';
import 'dotenv/config';
import passport from 'passport';
import { User } from '../entities/user.entity';
import { NextFunction, Request } from 'express';
import bcrypt from 'bcrypt';
import { saveJobSeekerProfile } from '../services/jobSeekerProfile.service';

type JWTPayLoad = {
  email: string,
  id: number,
  iat: number,
  exp: number
}
if (process.env.GOOGLE_CLIENT_ID === undefined) {
  throw new Error("cannot be undefined")
}
if (process.env.GOOGLE_CLIENT_SECRET === undefined) {
  throw new Error("cannot be undefined")
}
const GoogleStrategy = googleAuth.Strategy;
const JWTStrategy = jwtPassport.Strategy;
const JWTExtract = jwtPassport.ExtractJwt
const LocalStrategy = localPassport.Strategy;

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
},
  async (accessToken: any, refreshToken: any, profile: any, done: any) => {
    try {
      const user = new User();
      const existingUser = await User.findOneBy({
        accountId: profile.id
      });

      if (existingUser) {
        console.log('user exits ', existingUser);
        return done(null, existingUser);
      }
      // if no user exists , create the user in db
      user.accountId = profile.id;
      user.accountType = 'google';
      user.userType = 'jobSeeker';
      user.email = profile.emails[0].value;
      user.name = profile.name.givenName;
      user.isEmailVerified = true;
      const userData = await user.save();
      const jobSeekerParams = {
        user: {
          id: userData.id
        },
        id: userData.id,
        jobSeekerType: 'Fresher',
        resumePath: '',
        resumeFile: ''
      }
      const jobSeeker = await saveJobSeekerProfile(jobSeekerParams);
      return done(null, user)
    } catch (error) {
      console.log('error ', error);
      return done(error, false)
    }
  }
));

const jwtOptions = {
  // Telling Passport to check authorization headers for JWT
  jwtFromRequest: JWTExtract.fromAuthHeaderAsBearerToken(),
  // Telling Passport where to find the secret
  secretOrKey: process.env.JWT_SECRET,
  passReqToCallback: true,
};

passport.use(new JWTStrategy(jwtOptions, async (req: Request, payload: JWTPayLoad, done: any) => {
  const user = await User.findOneBy({
    id: payload.id
  });
  if (user) {
    console.log('jwt ---user ', user);
    done(null, user);
  } else {
    done(null, false)
  }
}));

passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password' },
  async (email, password, done) => {
    try {
      const user = await User.findOneBy({
        email
      });
      if (!user) {
        return done({ message: 'user not found' }, false);
      };
      if (user.hashedPassword === undefined) {
        new Error("Password cannot be undefined")
      } else {
        const passwordMatch = await bcrypt.compare(password, user.hashedPassword);
        if (!passwordMatch) {
          return done({ message: 'password did not match' }, false);
        };
        return done(null, user);
      }

    } catch (error) {
      console.log('error in local login ', error);
      return done(error, false);
    }
  }
))

passport.serializeUser((user: any, done: any) => {
  done(null, user.id);
});

passport.deserializeUser((id: any, done: any) => {
  User.findOneBy({ id }).then(user => {
    done(null, user);
  });
});

export default passport;