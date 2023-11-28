
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { genderList } from '../services/gender.service';

export const getGender: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await genderList();
    return res.status(201).json({
      message: 'Gender list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}