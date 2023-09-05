import { JobSeekerProfile } from '../entities/jobSeekerProfile.entity';
import { AppDataSource } from '../config/typeorm';
import { Education } from '../entities/education.entity';
import { CareerProfile } from '../entities/careerProfile.entity';
import { CareerProfileEmployeeType } from '../entities/careerProfileEmployeeType.entity';
import { CareerProfileJobType } from '../entities/careerProfileJobType.entity';
import { PreferredShift } from '../entities/preferredShift.entity';
import { CareerProfilePreferredLocations } from '../entities/careerProfilePreferredLocations.entity';
import { log } from 'console';

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
  console.log("jobSeekerParams=============", jobSeekerParams);

  try {

    const jobSeekerProfileRepository = AppDataSource.getRepository(JobSeekerProfile);
    await jobSeekerProfileRepository.update(id, {
      ...(jobSeekerParams.completedSections && { completedSections: jobSeekerParams.completedSections }),
      ...(jobSeekerParams.currentLocation && { currentLocation: jobSeekerParams.currentLocation }),
      ...(jobSeekerParams.noticePeriod && { noticePeriod: jobSeekerParams.noticePeriod }),
      ...({ profilePicturePath: jobSeekerParams.profilePicturePath }),
      ...({ profilePictureFile: jobSeekerParams.profilePictureFile }),
      ...({ resumePath: jobSeekerParams.resumePath }),
      ...({ resumeFile: jobSeekerParams.resumeFile }),
      ...({ resumeHeadline: jobSeekerParams.resumeHeadline }),
      ...({ profileSummary: jobSeekerParams.profileSummary }),
    });
    const jobSeekerProfile = await jobSeekerProfileRepository.findOneBy({ id });
    return jobSeekerProfile;
  } catch (error) {
    console.log('error', error);
    throw error;
  }

}

export const getJobSeekerProfile = async () => {
  try {
    const jobSeekerProfileRepository = AppDataSource.getRepository(JobSeekerProfile);
    const jobSeekerProfile = await jobSeekerProfileRepository.find();
    return jobSeekerProfile;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const saveCareerProfile = async (careerProfileParams: CareerProfile) => {
  try {
    AppDataSource.getRepository(CareerProfile)
      .createQueryBuilder("careerProfile").select("careerProfile")
      .where("careerProfile.jobSeekerProfile = :careerProfile", { careerProfile: careerProfileParams.jobSeekerProfile })
      .getOne().then(res => {
        console.log("MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM", res);
        if (res?.id) {
          console.log("UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU");
          AppDataSource.getRepository(CareerProfile)
            .createQueryBuilder("careerProfile").delete()
            .where("jobSeekerProfile = :jobSeekerProfile", { jobSeekerProfile: careerProfileParams.jobSeekerProfile })
            .execute().then((res) => {
              console.log("careerProfileParams=============================", careerProfileParams);
              const careerProfileRepository = AppDataSource.getRepository(CareerProfile);
              const careerProfile = careerProfileRepository.save(careerProfileParams);
              console.log("careerProfile Dev test-->", careerProfile);
              return careerProfile;
            })
        } else {
          console.log("careerProfileParams=============================", careerProfileParams);
          const careerProfileRepository = AppDataSource.getRepository(CareerProfile);
          const careerProfile = careerProfileRepository.save(careerProfileParams);
          console.log("careerProfile Dev test-->", careerProfile);
          return careerProfile;
        }
      });

  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const getCareerProfile = async () => {

  try {
    const careerProfileRepository = AppDataSource.getRepository(CareerProfile);
    const careerProfile = await careerProfileRepository.find({
      relations: {
        industry: true,
        department: true,
        roleCategory: true,
        jobRole: true,
        careerProfileJobType: { jobType: true },
        careerProfileEmployeeType: { employeeType: true },
        jobSeekerProfile: true,
        careerProfilePreferredShift: { preferredShift: true },
        careerProfilePreferredLocations: { location: true },
        currency: true
      }
    });
    //delete user.hashedPassword
    console.log("careerProfile-->", careerProfile);

    return careerProfile;

  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const saveEducation = async (educationParams: Education) => {
  console.log("educationParams-->", educationParams);
  try {
    let education: any;
    const educationRepository = AppDataSource.getRepository(Education);
    if (educationParams?.id) {
      let updatedValue = await educationRepository.update(educationParams.id, { ...educationParams });
      if (updatedValue.affected == 1) {
        education = await educationRepository.findOne({
          where: {
            id: educationParams.id
          }
        })
      }
    } else {
      education = await educationRepository.save(educationParams);
    }
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
    return education;

  } catch (error) {
    console.log('error', error);
    throw error;
  }
}