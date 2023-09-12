import passport from 'passport';
import jwt, { Secret } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('jwt');

}

const verifyUser = (req: Request, res: Response, next: NextFunction) => {
  const token = req?.cookies?.token;
  if (process.env.JWT_SECRET === undefined) {
    throw new Error(' JWT secret cannot be undefined')
  };
  const secretKey: Secret = process.env.JWT_SECRET
  console.log(token);

  if (!token) {
    return res.json({ message: "We need token, please provide it. Login now" })
  } else {
    jwt.verify(token, secretKey, (err: any, decoded: any) => {
      if (err) {
        return res.json({ message: "Authentication error" })
      } else {
        req.user = decoded?.email;
        next();
      }
    })
  }

}

export default verifyUser