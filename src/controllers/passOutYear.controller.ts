
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { PassOutYearList } from '../services/passOutYear.service';

export const getPassOutYear: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PassOutYearList();
    return res.status(201).json({
      message: 'Pass Out Year list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}