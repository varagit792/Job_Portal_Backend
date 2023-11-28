
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { employeeTypeList } from '../services/employeeType.service';

export const getEmployeeType: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await employeeTypeList();
    return res.status(201).json({
      message: 'employee type list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}