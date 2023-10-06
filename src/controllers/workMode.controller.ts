import { Request, RequestHandler, Response, NextFunction } from 'express';
import { workModeList } from '../services/workMode.service';

export const getWorkMode: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await workModeList();
    return res.status(201).json({
      message: 'WorkMode list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}