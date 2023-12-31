import { storageResume, fileFilterDocument } from '../config/multer';
import { Request, RequestHandler, Response, NextFunction } from 'express';
import multer from 'multer';
import bcrypt from 'bcrypt';
import { promisify } from 'util';
import { loginCheckUser, fetchUser, saveUser } from '../services/user.service';
import { saveJobSeekerProfile } from '../services/jobSeekerProfile.service';
import { generateToken } from '../utils/generateToken';
import { User } from '../entities/user.entity';
import { SaveOptions, RemoveOptions } from 'typeorm';
import 'dotenv/config';
import { saveStagingEmailTemplates } from '../services/stagingEmailTemplates.service';

interface OutParams extends User {
  jobSeekProfileId?: number,
  recruiterProfileId?: number
}

export const registerUser: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const { workStatus, ...userParams } = req.body;
    const jobSeekerType = workStatus ? 'Experienced' : 'Fresher';

    const userData = await fetchUser(userParams.email);
    if (userData) {
      return res.status(400).json({
        message: 'Email already exists'
      })
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userParams.password, saltRounds).then(function (hash) { return hash });
    userParams.hashedPassword = hashedPassword;
    delete userParams.password;

    if (process.env.FILE_LIMIT === undefined) {
      throw new Error('file limit cannot be undefined')
    }
    let upload = await promisify(multer({
      storage: storageResume,
      fileFilter: fileFilterDocument,
      limits: { fileSize: parseInt(process.env.FILE_LIMIT) }
    }).single('file'));

    await upload(req, res);
    let resumePath;
    if (!req.file) {
      resumePath = 'no path';
    } else {
      resumePath = req.file.path;
    };

    const fileName = req.file?.filename
    const user = await saveUser(userParams);

    const stagingTemplateParams = {
      email: user.email,
      templateType: 'emailVerify'
    };
   
    await saveStagingEmailTemplates(stagingTemplateParams as any)
    const OutPutData: OutParams = {
      ...user,
      hasId: function (): boolean {
        throw new Error('Function not implemented.');
      },
      save: function (options?: SaveOptions | undefined): Promise<OutParams> {
        throw new Error('Function not implemented.');
      },
      remove: function (options?: RemoveOptions | undefined): Promise<OutParams> {
        throw new Error('Function not implemented.');
      },
      softRemove: function (options?: SaveOptions | undefined): Promise<OutParams> {
        throw new Error('Function not implemented.');
      },
      recover: function (options?: SaveOptions | undefined): Promise<OutParams> {
        throw new Error('Function not implemented.');
      },
      reload: function (): Promise<void> {
        throw new Error('Function not implemented.');
      }
    }
    switch (user.userType) {
      case 'jobSeeker': {

        const jobSeekerParams = {
          userId: user.id,
          jobSeekerType,
          id: user.id,
          resumePath: resumePath,
          resumeFile: fileName,
          user: {
            id: user.id
          }
        }
        const jobSeeker = await saveJobSeekerProfile(jobSeekerParams);
        OutPutData.jobSeekProfileId = jobSeeker.id
      }
    }
    const token = await generateToken(user);
    res.cookie('token', token);
    return res.status(201).json({
      message: 'User successfully saved',
      data: OutPutData,
      token:token
    });

  } catch (error) {
    console.log('error', error);
    if (error instanceof multer.MulterError) {
      if (error.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({
          message: 'File size larger then 2MB'
        })
      }
    } else {
      if (error instanceof Error) {
        return res.status(400).json({
          message: error.message
        });
      } else {
        return res.status(500).json({
          message: 'Internal server error'
        });
      }
    }
  }
}

export const signInUser: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {

  try {
    const { ...userParams } = req.body;
    const userData = await loginCheckUser(userParams.email);
    if (userData) {
      const passwordMatch = await bcrypt.compare(userParams.password, `${userData.hashedPassword}`);

      if (passwordMatch) {
        const token = await generateToken(userData);
        res.cookie('token', token);

        return res.status(201).json({
          message: 'valid user',
          data: userData,
          token: token
        });
      } else {
        return res.status(500).json({
          message: 'Invalid user',

        });
      }
    } else {
      return res.status(500).json({
        message: 'Invalid user',
      });
    }
  } catch (error) {
    console.log('error', error);
  }
}

export const getUserDetails: RequestHandler = async (req: Request, res: Response) => {
  try {

    return res.status(200).json({
      data: req.user
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  }
}

