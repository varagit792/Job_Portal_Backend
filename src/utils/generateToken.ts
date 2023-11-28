import jwt, { Secret } from 'jsonwebtoken';
import { User } from '../entities/user.entity';

export const generateToken = async (user: User) => {
  try {
    if (process.env.JWT_SECRET === undefined) {
      throw new Error(' JWT secret cannot be undefined')
    };
    const secretKey: Secret = process.env.JWT_SECRET
    return new Promise((resolve, reject) => {
      jwt.sign({ id: user.id, email: user.email }, secretKey, { expiresIn: '7d' }, (err, token) => {
        if (err) {
          console.log('error', err);
          reject(err);
        }
        resolve(token)
      });
    })
  } catch (error) {
    console.log('error', error);
    throw error
  }
}

export const generateTokenForEmailLink = async (user: User) => {
  try {
    if (process.env.JWT_SECRET === undefined) {
      throw new Error(' JWT secret cannot be undefined')
    };
    const secretKey: Secret = process.env.JWT_SECRET
    return new Promise((resolve, reject) => {
      jwt.sign({ id: user.id, email: user.email }, secretKey, { expiresIn: 120 }, (err, token) => {
        if (err) {
          console.log('error', err);
          reject(err);
        }
        resolve(token)
      });
    })
  } catch (error) {
    console.log('error', error);
    throw error
  }
}