
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { highestQualificationList } from '../services/highestQualification.service';

export const getHighestQualification: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await highestQualificationList();
    return res.status(201).json({
      message: 'Highest qualification list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}