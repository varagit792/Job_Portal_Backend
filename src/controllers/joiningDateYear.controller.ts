
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { joiningDateYearList } from '../services/joiningDateYear.service';

export const getJoiningDateYear: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await joiningDateYearList();
    return res.status(201).json({
      message: 'Joining Date year list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}