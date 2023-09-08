import { Request, RequestHandler, Response, NextFunction } from 'express';
import { MaritalStatusList } from '../services/maritalStatus.service';

export const getMaritalStatus: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await MaritalStatusList();
        return res.status(201).json({
            message: 'MaritalStatus list getting successfully',
            data: result
        });

    } catch (error) {
        console.log('error', error);
        return res.status(500).json({
            message: 'Internal server error'
        })
    };
}