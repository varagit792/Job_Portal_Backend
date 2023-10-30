
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { jobStatusList } from '../services/jobStatus.service';

export const getJobStatus: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await jobStatusList();
    return res.status(201).json({
      message: 'jobStatus list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}