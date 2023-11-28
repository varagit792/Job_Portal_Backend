import { Request, RequestHandler, Response, NextFunction } from 'express';
import { salaryRangeList } from '../services/salaryRange.service';

export const getSalaryRange: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await salaryRangeList();
    return res.status(201).json({
      message: 'SalaryRange list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}