
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { specializationList } from '../services/specialization.service';

export const getSpecialization: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await specializationList();
    return res.status(201).json({
      message: 'Specialization list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}