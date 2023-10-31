
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { jobExpiryList } from '../services/jobExpiry.service';

export const getJobExpiry: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await jobExpiryList();
    return res.status(201).json({
      message: 'jobExpiry list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}