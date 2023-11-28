
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { noticePeriodList } from '../services/noticePeriod.service';

export const getNoticePeriod: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await noticePeriodList();
    return res.status(201).json({
      message: 'Notice period list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}