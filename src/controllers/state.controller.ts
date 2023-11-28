import { Request, RequestHandler, Response, NextFunction } from 'express';
import { stateList } from '../services/state.service';

export const getState: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await stateList();
    return res.status(201).json({
      message: 'State list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}