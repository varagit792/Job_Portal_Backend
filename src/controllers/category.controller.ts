import { Request, RequestHandler, Response, NextFunction } from 'express';
import { CategoryList } from '../services/category.service';

export const getCategory: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await CategoryList();
        return res.status(201).json({
            message: 'Category list getting successfully',
            data: result
        });

    } catch (error) {
        console.log('error', error);
        return res.status(500).json({
            message: 'Internal server error'
        })
    };
}