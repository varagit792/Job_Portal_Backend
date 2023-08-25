
import { Request, response, NextFunction, Response } from 'express';
import 'dotenv/config';
import { generateToken } from './generateToken';

export const jwtSign = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.user;
    if (!user || !user.email) {
      res.status(401).json({ message: 'Unauthorized' });
      next();
    }

    const token = await generateToken(user);
    console.log('token ', token);
    res.cookie('token', token);
    res.redirect('http://localhost:3000/homePage');
    next();
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error'
    })
  }

};