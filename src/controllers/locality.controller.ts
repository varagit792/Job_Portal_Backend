import { Request, RequestHandler, Response, NextFunction } from 'express';
import { localityList } from '../services/locality.service';

export const getLocality: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await localityList();
    return res.status(201).json({
      message: 'Locality list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}