import { Request, RequestHandler, Response, NextFunction } from 'express';
import { ProficiencyList } from '../services/proficiency.service';

export const getProficiency: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await ProficiencyList();
        return res.status(201).json({
            message: 'Proficiency list getting successfully',
            data: result
        });

    } catch (error) {
        console.log('error', error);
        return res.status(500).json({
            message: 'Internal server error'
        })
    };
}