
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { joiningDateMonthList } from '../services/joiningDateMonth.service';

export const getJoiningDateMonth: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await joiningDateMonthList();
    return res.status(201).json({
      message: 'Joining Date Month list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}