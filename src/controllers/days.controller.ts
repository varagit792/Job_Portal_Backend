import { Request, RequestHandler, Response, NextFunction } from 'express';
import { DaysList } from '../services/days.service';

export const getDays: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await DaysList();
        return res.status(201).json({
            message: 'Days list getting successfully',
            data: result
        });

    } catch (error) {
        console.log('error', error);
        return res.status(500).json({
            message: 'Internal server error'
        })
    };
}