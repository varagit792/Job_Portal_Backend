import { Request, RequestHandler, Response, NextFunction } from 'express';
import { saveApplyJob, getCountApplicantWithList } from '../services/applyJob.service';
import 'dotenv/config';



export const postApplyJob: RequestHandler = async (req: Request, res: Response) => {
  try {
    const result = await saveApplyJob(req.body);
    return res.status(200).json({
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  }
}


export const fetchCountApplicantWithList: RequestHandler = async (req: Request, res: Response) => {
  try {

    const jobId = req.params.jobId;
    const result = await getCountApplicantWithList(parseInt(jobId));
    return res.status(200).json({
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  }
}

