
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { jobTitleList } from '../services/jobTitle.service';

export const getJobTitle: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await jobTitleList();
    return res.status(201).json({
      message: 'Job title list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}