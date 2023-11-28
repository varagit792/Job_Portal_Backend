
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { locationList } from '../services/location.service';

export const getLocation: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await locationList();
    return res.status(201).json({
      message: 'Location list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}