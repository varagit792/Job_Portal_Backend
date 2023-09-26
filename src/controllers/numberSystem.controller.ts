import { Request, RequestHandler, Response, NextFunction } from 'express';
import { numberSystemList } from '../services/numberSystem.service';

export const getNumberSystem: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await numberSystemList();
    return res.status(201).json({
      message: 'NumberSystem list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}