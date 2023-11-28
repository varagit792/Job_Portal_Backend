
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { industryList } from '../services/industry.service';

export const getIndustry: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await industryList();
    return res.status(201).json({
      message: 'Industry list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}