import { Request, RequestHandler, Response, NextFunction } from 'express';
import { recurrenceList } from '../services/recurrence.service';

export const getRecurrence: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await recurrenceList();
    return res.status(201).json({
      message: 'Recurrence list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}