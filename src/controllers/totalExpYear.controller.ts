
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { totalExpYearList } from '../services/totalExpYear.service';

export const getTotalExpYear: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await totalExpYearList();
    return res.status(201).json({
      message: 'Total exp. year list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}