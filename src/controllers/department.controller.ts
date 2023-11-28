
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { departmentList } from '../services/department.service';

export const getDepartment: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await departmentList();
    return res.status(201).json({
      message: 'Department list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}