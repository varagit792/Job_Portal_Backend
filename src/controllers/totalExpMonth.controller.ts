
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { totalExpMonthList } from '../services/totalExpMonth.service';

export const getTotalExpMonth: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await totalExpMonthList();
    return res.status(201).json({
      message: 'Total exp. month list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}