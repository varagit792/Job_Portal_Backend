
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { preferredShiftList } from '../services/preferredShift.service';

export const getPreferredShift: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await preferredShiftList();
    return res.status(201).json({
      message: 'Preferred shift list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}