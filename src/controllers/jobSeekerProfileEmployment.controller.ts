import { Request, Response } from 'express';
import { saveJobSeekerProfileEmployment } from '../services/jobSeekerProfileEmployment.service';
import 'dotenv/config';


export const addOrUpdateJobSeekerProfileEmployment = async (req: Request, res: Response) => {
    try {
        const education = await saveJobSeekerProfileEmployment(req.body);
        console.log("education", education);
        
        res.status(201).json({
            message: 'Employment details added successfully',
            data: education
        });
    } catch (error: any) {
        return res.status(500).json({
            message: 'Internal Server Error',
            error: error.sqlMessage
        });
    }
}



