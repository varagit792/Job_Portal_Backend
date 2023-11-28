
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { roleCategoryList } from '../services/roleCategory.service';

export const getRoleCategory: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await roleCategoryList();
    return res.status(201).json({
      message: 'Role category list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}