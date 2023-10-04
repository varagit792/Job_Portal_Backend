import { Request, RequestHandler, Response, NextFunction } from 'express';
import { saveJobs, filtersJobs } from '../../services/admin/jobs.service';
import 'dotenv/config';

export const fetchFiltersJobs: RequestHandler = async (req: Request, res: Response) => {
  try {
    const query = req?.query;
    const result = await filtersJobs(query);
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

