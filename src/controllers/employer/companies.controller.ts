import { Request, RequestHandler, Response, NextFunction } from 'express';
import 'dotenv/config';
import { allCompanies, getCompanyDetails, saveCompanies, employerCompanyList } from '../../services/employer/companies.service';

export const fetchAllCompanies: RequestHandler = async (req: Request, res: Response) => {
  try {
    const query = req?.query;
    const result = await allCompanies(query);
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

export const postCompanies: RequestHandler = async (req: Request, res: Response) => {
  try {
    const result = await saveCompanies(req.body);
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


export const fetchCompanyDetails: RequestHandler = async (req: Request, res: Response) => {
  try {

    const jobId = req.params.id;
    const result = await getCompanyDetails(parseInt(jobId));
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

export const fetchEmployerCompanyList: RequestHandler = async (req: Request, res: Response) => {
  try {
    const query = req?.query;
    const result = await employerCompanyList(query);
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
