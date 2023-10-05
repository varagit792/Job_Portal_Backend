import { Request, RequestHandler, Response, NextFunction } from 'express';
import { saveJobs, jobsList, getJobDetails } from '../../services/admin/jobs.service';
import 'dotenv/config';

export const fetchJobsList: RequestHandler = async (req: Request, res: Response) => {
  try {
    const query = req?.query;
    const result = await jobsList(query);
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

export const postJobs: RequestHandler = async (req: Request, res: Response) => {
  try {
    const result = await saveJobs(req.body);
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


export const fetchJobDetails: RequestHandler = async (req: Request, res: Response) => {
  try {

    const jobId = req.params.id;
    const result = await getJobDetails(parseInt(jobId));
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

