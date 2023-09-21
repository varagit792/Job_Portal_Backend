import { Request, Response } from 'express';
import { getEducation, saveEducation, updateJobSeekerProfile, getJobSeekerProfile, saveCareerProfile, getCareerProfile, savePersonalDetails, updateJobSeekerProfileBasicDetails, deleteLanguages } from '../services/jobSeekerProfile.service';
import { JobSeekerProfile } from '../entities/jobSeekerProfile.entity';
import multer from 'multer';
import { storageResume, fileFilterDocument, fileFilterImage, storageProfilePicture } from '../config/multer';
import { promisify } from 'util';
import 'dotenv/config';
import { log } from 'console';
import { couldStartTrivia } from 'typescript';
import { fetchUser, updateUser } from '../services/user.service';
import { sendEmailVerifyLink } from '../utils/sendEmail';
import { generateToken } from '../utils/generateToken';
import jwt, { Secret } from 'jsonwebtoken';
import { verifyJwtToken } from '../utils/verifyJwtToken';
export const updateJobSeekerProfileController = async (req: Request, res: Response) => {
  try {

    const jobSeekerParams: JobSeekerProfile = req.body;
    const jobSeekerProfileData = await updateJobSeekerProfile(req.user.id, jobSeekerParams);
    return res.status(200).json({
      data: jobSeekerProfileData
    });
  } catch (error) {
    console.log('error', error);
    res.status(500).json({
      message: 'Internal Server Error'
    });
  }
}

export const getJobSeekerProfileController = async (req: Request, res: Response) => {
  try {
    const jobSeekerProfile = await getJobSeekerProfile(req.user.id);
    res.status(200).json({
      data: jobSeekerProfile
    });
  } catch (error: any) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.sqlMessage
    });
  }
}

export const updateJobSeekerResume = async (req: Request, res: Response) => {
  try {
    if (process.env.FILE_LIMIT === undefined) {
      throw new Error('file limit cannot be undefined')
    }

    const upload = promisify(multer({
      storage: storageResume,
      fileFilter: fileFilterDocument,
      limits: { fileSize: parseInt(process.env.FILE_LIMIT) }
    }).single('file'));

    await upload(req, res);
    const { id } = req.user;;

    let jobSeekerParams: JobSeekerProfile = req.body;
    if (!req.file) {
      jobSeekerParams.resumePath = 'Empty file'
    } else {
      jobSeekerParams.resumePath = req.file.filename
      jobSeekerParams.resumeFile = req.file.originalname
    };

    const jobSeekerProfile = await updateJobSeekerProfile(id, jobSeekerParams)
    return res.status(200).json(
      {
        message: 'success',
        data: jobSeekerProfile
      }
    );

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

export const updateJobSeekerProfilePicture = async (req: Request, res: Response) => {
  try {
    if (process.env.FILE_LIMIT === undefined) {
      throw new Error('file limit cannot be undefined')
    }

    const upload = promisify(multer({
      storage: storageProfilePicture,
      fileFilter: fileFilterImage,
      limits: { fileSize: parseInt(process.env.FILE_LIMIT) }
    }).single('file'));

    await upload(req, res);
    const { id } = req.user;;

    let jobSeekerParams: JobSeekerProfile = req.body;
    if (!req.file) {
      return res.status(400).json({
        message: 'Profile Picture file is empty'
      });
    } else {
      jobSeekerParams.profilePicturePath = req.file.filename
      jobSeekerParams.profilePictureFile = req.file.originalname
    };

    const jobSeekerProfile = await updateJobSeekerProfile(id, jobSeekerParams)
    return res.status(200).json(
      {
        message: 'success',
        data: jobSeekerProfile
      }
    );

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

export const addOrUpdateEducation = async (req: Request, res: Response) => {
  try {
    const education = await saveEducation(req.body);
    res.status(201).json({
      message: 'Education details added successfully',
      data: education
    });
  } catch (error: any) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.sqlMessage
    });
  }
}

export const getEducationDetails = async (req: Request, res: Response) => {
  try {
    const education = await getEducation();
    res.status(200).json({
      data: education
    });
  } catch (error: any) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.sqlMessage
    });
  }
}


export const deleteJobSeekerResume = async (req: Request, res: Response) => {
  try {
    const { id } = req.user;
    let jobSeekerParams: JobSeekerProfile = req.body;
    jobSeekerParams.resumeFile = '';
    jobSeekerParams.resumePath = '';
    jobSeekerParams.id = id
    const jobSeekerProfile = await updateJobSeekerProfile(id, jobSeekerParams);
    res.status(201).json({
      message: 'JobSeekerProfile resume deleted successfully',
      data: jobSeekerProfile
    });
  } catch (error: any) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.sqlMessage
    });
  }
}

export const deleteJobSeekerProfilePicture = async (req: Request, res: Response) => {
  try {
    const { id } = req.user;
    let jobSeekerParams: JobSeekerProfile = req.body;
    jobSeekerParams.profilePictureFile = req.body.profilePictureFile;
    jobSeekerParams.profilePicturePath = req.body.profilePicturePath;
    jobSeekerParams.id = id
    const jobSeekerProfile = await updateJobSeekerProfile(id, jobSeekerParams);
    res.status(201).json({
      message: 'JobSeekerProfile picture deleted successfully',
      data: jobSeekerProfile
    });
  } catch (error: any) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.sqlMessage
    });
  }
}


export const addOrUpdateCareerProfile = async (req: Request, res: Response) => {

  try {
    const user = await saveCareerProfile(req.body);
    res.status(201).json({
      message: 'Career profile details added successfully',
      data: user
    });
  } catch (error: any) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.sqlMessage
    });
  }
}

export const getCareerProfileDetails = async (req: Request, res: Response) => {

  try {
    const careerProfile = await getCareerProfile(req.user.id);
    res.status(200).json({
      data: careerProfile
    });
  } catch (error: any) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.sqlMessage
    });
  }
}

export const addOrUpdatePersonalDetails = async (req: Request, res: Response) => {
  try {
    const personalDetails = await savePersonalDetails(req.body);
    res.status(201).json({
      message: 'Personal details added successfully',
      data: personalDetails
    });
  } catch (error: any) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.sqlMessage
    });
  }
}

export const deletePersonalDetailsLanguages = async (req: Request, res: Response) => {
  try {
    const languages = await deleteLanguages(req.body);
    res.status(201).json({
      message: 'Languages successfully deleted',
      data: languages
    });
  } catch (error: any) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.sqlMessage
    });
  }
}

export const updateJobSeekerProfileBasicDetailsController = async (req: Request, res: Response) => {
  try {

    const { email, mobileNumber, name, ...jobSeekerBasicDetailParams } = req.body;
    const userParams = {
      email,
      mobileNumber,
      name
    };

    const userData = await updateUser(req.user.id, userParams);
    const jobSeekerProfileData = await updateJobSeekerProfileBasicDetails(req.user.id, jobSeekerBasicDetailParams);
    return res.status(200).json({
      data: jobSeekerProfileData
    });
  } catch (error) {
    console.log('error', error);
    res.status(500).json({
      message: 'Internal Server Error'
    });
  }
}

export const ProfileIndicator = async (req: Request, res: Response) => {
  /**
   * Weighage
   * 
   * Resume = 10%
   * Resume head line = 2%
   * Profile Picture = 2%
   * Career profile = 10%
   * Key skill = 10%
   * Education = 13%
   * It Skills = 10%
   * Projects = 10%
   * Profile summery = 4%
   * Accomplishments = 4%
   * Personal details = 10%
   * Language = 5%
   * 
  */

  const completeData = {
    calculatedProfileIndicator: 0,
    resume: { status: false, value: 10 },
    resumeHeadLine: { status: false, value: 2 },
    profilePicture: { status: false, value: 2 },
    careerProfile: { status: false, value: 10 },
    keySkill: { status: false, value: 10 },
    education: { status: false, value: 13 },
    itSkills: { status: false, value: 10 },
    projects: { status: false, value: 10 },
    profileSummery: { status: false, value: 4 },
    accomplishments: { status: false, value: 4 },
    personalDetails: { status: false, value: 10 },
    employment: { status: false, value: 10 },
    language: { status: false, value: 5 },
  }
  try {
    const indicator = await getJobSeekerProfile(req.user.id);
    if (indicator?.resumeFile && indicator?.resumePath) {
      completeData.calculatedProfileIndicator += completeData?.resume?.value;
      completeData.resume.status = true;
    }

    if (indicator?.resumeHeadline) {
      completeData.calculatedProfileIndicator += completeData?.resumeHeadLine?.value;
      completeData.resumeHeadLine.status = true;
    }

    if (indicator?.profilePictureFile && indicator?.profilePicturePath) {
      completeData.calculatedProfileIndicator += completeData?.profilePicture?.value;
      completeData.profilePicture.status = true;
    }
    if (indicator?.careerProfile) {
      completeData.calculatedProfileIndicator += completeData?.careerProfile?.value;
      completeData.careerProfile.status = true;
    }
    if (indicator?.keySkills) {
      completeData.calculatedProfileIndicator += completeData?.keySkill?.value;
      completeData.keySkill.status = true;
    }
    if (indicator?.educations && indicator?.educations?.length > 0) {
      completeData.calculatedProfileIndicator += completeData?.education?.value;
      completeData.education.status = true;
    }
    if (indicator?.profileSummary) {
      completeData.calculatedProfileIndicator += completeData?.profileSummery?.value;
      completeData.profileSummery.status = true;
    }

    if (indicator?.employments && indicator?.employments?.length > 0) {
      completeData.calculatedProfileIndicator += completeData?.employment?.value;
      completeData.employment.status = true;
    }

    if (indicator?.personalDetails) {
      completeData.calculatedProfileIndicator += completeData?.personalDetails?.value;
      completeData.personalDetails.status = true;
    }
    if (indicator?.personalDetails?.language && indicator?.personalDetails?.language?.length > 0) {
      completeData.calculatedProfileIndicator += completeData?.language?.value;
      completeData.language.status = true;
    }

    res.status(201).json({
      message: 'Profile indicator fetched',
      data: [completeData]
    });
  } catch (error: any) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.sqlMessage
    });
  }
}
export const jobSeekerMailVerification = async (req: Request, res: Response) => {
  try {

    const token = await generateToken(req.user);
    const mailParams = {
      email: req.user.email,
      token
    }
    const mailData = await sendEmailVerifyLink(mailParams);

    return res.status(200).json({
      data: mailData
    });

  } catch (error: any) {
    console.log('error', error);
    res.status(500).json({
      message: error.message
    })
  }
}

export const updateJobSeekerMailVerification = async (req: Request, res: Response) => {
  try {

    const token = req.params.token;
    const decoded: any = await verifyJwtToken(token);
    const userData = await fetchUser(decoded.email)
    if (userData) {
      const emailParams = {
        isEmailVerified: true
      }
      const mailData = await updateUser(userData.id, emailParams);
      return res.status(200).json({
        message: 'Email successfully verified'
      });
    } else {
      return res.status(400).json({
        message: 'User not present'
      });
    };

  } catch (error: any) {
    console.log('error', error);
    res.status(500).json({
      message: error.message
    })
  }
}
