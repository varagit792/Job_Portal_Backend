import { Request, RequestHandler, Response, NextFunction } from 'express';
import { educationTypeList } from '../services/educationType.service';

export const getEducationType: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await educationTypeList();
    return res.status(201).json({
      message: 'Education type list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}