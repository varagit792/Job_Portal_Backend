import { Request, RequestHandler, Response, NextFunction } from 'express';
import { BoardList } from '../services/board.service';

export const getBoard: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await BoardList();
        return res.status(201).json({
            message: 'Board list getting successfully',
            data: result
        });

    } catch (error) {
        console.log('error', error);
        return res.status(500).json({
            message: 'Internal server error'
        })
    };
}