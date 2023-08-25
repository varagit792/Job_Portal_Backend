import { JobSeekerProfile } from '../../entities/JobSeekerProfile';
import { AppDataSource } from '../../config/typeorm';
import { Education } from '../../entities/Education';

type Params = {
  userId: number,
  workStatus: boolean
}

export const saveJobSeekerProfile = async (jobSeekerParams: Params) => {
  try {
    const jobSeekerProfileRepository = AppDataSource.getRepository(JobSeekerProfile);
    const jobSeekerProfile = jobSeekerProfileRepository.save(jobSeekerParams);

    return jobSeekerProfile;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};

export const updateJobSeekerProfile = async (id: number, jobSeekerParams: JobSeekerProfile) => {
  try {
    const jobSeekerProfileRepository = AppDataSource.getRepository(JobSeekerProfile);
    const jobSeekerProfile = await jobSeekerProfileRepository.update(id, {
      ...(jobSeekerParams.completedSections && { completedSections: jobSeekerParams.completedSections }),
      ...(jobSeekerParams.currentLocation && { currentLocation: jobSeekerParams.currentLocation }),
      ...(jobSeekerParams.noticePeriod && { noticePeriod: jobSeekerParams.noticePeriod }),
      ...(jobSeekerParams.profilePicture && { profilePicture: jobSeekerParams.profilePicture }),
      ...(jobSeekerParams.resume && { resume: jobSeekerParams.resume }),
      ...(jobSeekerParams.profileSummary && { profileSummary: jobSeekerParams.profileSummary })
    });
    return jobSeekerProfile;

  } catch (error) {
    console.log('error', error);
    throw error;
  }

}

export const saveEducation = async (educationParams: Education) => {
  console.log("educationParams-->", educationParams);
  
  try {
    const educationRepository = AppDataSource.getRepository(Education);
    const education = await educationRepository.save(educationParams);
    //delete user.hashedPassword
    console.log("education-->", education);
    
    return education;

  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const getEducation = async () => {
  
  try {
    const educationRepository = AppDataSource.getRepository(Education);
    const education = await educationRepository.find();
    //delete user.hashedPassword
    console.log("education-->", education);
    
    return education;

  } catch (error) {
    console.log('error', error);
    throw error;
  }
}