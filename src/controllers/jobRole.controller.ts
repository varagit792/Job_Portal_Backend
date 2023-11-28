
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { jobRoleList } from '../services/jobRole.service';

export const getJobRole: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await jobRoleList();
    return res.status(201).json({
      message: 'Job role list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}