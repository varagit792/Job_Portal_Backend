import { Request, RequestHandler, Response, NextFunction } from 'express';
import { cityList } from '../services/city.service';

export const getCity: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await cityList();
    return res.status(201).json({
      message: 'City list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}