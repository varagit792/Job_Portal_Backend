import { RequestHandler, Response } from 'express';
import { Request } from 'express-jwt';
import { fileFilterDocument, storageResume } from '../../config/multer';
import { promisify } from 'util';
import multer from 'multer';
import 'dotenv/config';

export const multerUpload: RequestHandler = async (req: Request, res: Response) => {
  try {

    if (process.env.FILE_LIMIT === undefined) {
      throw new Error('file limit cannot be undefined')
    }
    let upload = await promisify(multer({
      storage:storageResume,
      fileFilter: fileFilterDocument,
      limits: { fileSize: parseInt(process.env.FILE_LIMIT) }
    }).single('file'));

    await upload(req, res);
    const { id } = req.body;
    
    return res.status(200).json({
      message: 'success'
    })

  } catch (error) {
    console.error('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  }
};
