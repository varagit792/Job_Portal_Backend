
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { companyTypeList } from '../services/companyType.service';

export const getCourse: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await companyTypeList();
    return res.status(201).json({
      message: 'company Type list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}