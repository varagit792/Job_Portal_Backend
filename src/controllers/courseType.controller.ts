
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { courseTypeList } from '../services/courseType.service';

export const getCourseType: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await courseTypeList();
    return res.status(201).json({
      message: 'course type list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}