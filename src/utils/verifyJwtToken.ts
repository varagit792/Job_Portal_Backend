import jwt, { Secret } from 'jsonwebtoken';
import { resolve } from 'path';

export const verifyJwtToken = async (token: string) => {
  try {
    if (process.env.JWT_SECRET === undefined) {
      throw new Error(' JWT secret cannot be undefined')
    };

    const secretKey: Secret = process.env.JWT_SECRET;

    return new Promise((resolve, reject) => {
      jwt.verify(token, secretKey, (err: any, decoded: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(decoded);
        }
      })
    });

  } catch (error) {
    console.log('error', error);
  }
}
