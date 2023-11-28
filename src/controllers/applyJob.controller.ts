import { Request, RequestHandler, Response, NextFunction } from 'express';
import { saveApplyJob, getCountApplicant, getApplicantList, getApplyJobList } from '../services/applyJob.service';
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

export const fetchApplyJobList: RequestHandler = async (req: Request, res: Response) => {
  try {

    const userId = req.params.userId;
    const result = await getApplyJobList(parseInt(userId));
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


export const fetchCountApplicant: RequestHandler = async (req: Request, res: Response) => {
  try {

    const jobId = req.params.jobId;
    const result = await getCountApplicant(parseInt(jobId));
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

export const fetchApplicantList: RequestHandler = async (req: Request, res: Response) => {
  try {

    const jobId = req.params.jobId;
    const result = await getApplicantList(parseInt(jobId));
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
