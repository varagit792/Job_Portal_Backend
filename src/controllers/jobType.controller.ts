
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { jobTypeList } from '../services/jobType.service';

export const getJobType: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await jobTypeList();
    return res.status(201).json({
      message: 'Job type list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}