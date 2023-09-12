import { JobSeekerProfile } from '../entities/jobSeekerProfile.entity';
import { AppDataSource } from '../config/typeorm';
import { Education } from '../entities/education.entity';
import { CareerProfile } from '../entities/careerProfile.entity';
import { CareerProfileEmployeeType } from '../entities/careerProfileEmployeeType.entity';
import { CareerProfileJobType } from '../entities/careerProfileJobType.entity';
import { PreferredShift } from '../entities/preferredShift.entity';
import { CareerProfilePreferredLocations } from '../entities/careerProfilePreferredLocations.entity';
import { log } from 'console';
import { PersonalDetails } from '../entities/personalDetails.entity';

type Params = {
  userId: number,
  jobSeekerType: string
  id: number;
  resumePath: string;
  resumeFile?: string
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
  console.log("jobSeekerParams=============", jobSeekerParams, id);

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

export const getJobSeekerProfile = async (id: number) => {
  try {
    const jobSeekerProfileRepository = AppDataSource.getRepository(JobSeekerProfile);
    const jobSeekerProfile = await jobSeekerProfileRepository.findOne({
      where: {
        id
      },
      relations: {
        currentLocation: true,
        totalExpMonth: true,
        totalExpYear: true,
        noticePeriod: true,
        personalDetails: {
          language: true
        },
      }
    });
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
        if (res?.id) {
          AppDataSource.getRepository(CareerProfile)
            .createQueryBuilder("careerProfile").delete()
            .where("jobSeekerProfile = :jobSeekerProfile", { jobSeekerProfile: careerProfileParams.jobSeekerProfile })
            .execute().then((res) => {
              const careerProfileRepository = AppDataSource.getRepository(CareerProfile);
              const careerProfile = careerProfileRepository.save(careerProfileParams);
              return careerProfile;
            })
        } else {
          const careerProfileRepository = AppDataSource.getRepository(CareerProfile);
          const careerProfile = careerProfileRepository.save(careerProfileParams);
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
    return careerProfile;

  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const saveEducation = async (personalDetailsParams: Education) => {
  console.log("personalDetailsParams-->", personalDetailsParams);
  try {
    let personalDetails: any;
    const personalDetailsRepository = AppDataSource.getRepository(Education);
    if (personalDetailsParams?.id) {
      let updatedValue = await personalDetailsRepository.update(personalDetailsParams.id, { ...personalDetailsParams });
      if (updatedValue.affected == 1) {
        personalDetails = await personalDetailsRepository.findOne({
          where: {
            id: personalDetailsParams.id
          }
        })
      }
    } else {
      personalDetails = await personalDetailsRepository.save(personalDetailsParams);
    }
    //delete user.hashedPassword
    console.log("personalDetails-->", personalDetails);

    return personalDetails;

  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const getEducation = async () => {

  try {
    const personalDetailsRepository = AppDataSource.getRepository(Education);
    const personalDetails = await personalDetailsRepository.find();
    return personalDetails;

  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const savePersonalDetails = async (personalDetailsParams: PersonalDetails) => {
  try {
    let personalDetails: any;
    const personalDetailsRepository = AppDataSource.getRepository(PersonalDetails);
    if (personalDetailsParams?.id) {
      personalDetails = await personalDetailsRepository.findOne({
        where: {
          id: personalDetailsParams.id
        },
        relations: ["language"]
      });
      personalDetails.id = Number(personalDetailsParams.id);
      personalDetails.jobSeekerProfile = personalDetailsParams.jobSeekerProfile,
        personalDetails.gender = personalDetailsParams.gender,
        personalDetails.maritalStatus = personalDetailsParams.maritalStatus,
        personalDetails.birthDate = personalDetailsParams.birthDate,
        personalDetails.category = personalDetailsParams.category,
        personalDetails.differentlyAbled = personalDetailsParams.differentlyAbled,
        personalDetails.careerBreak = personalDetailsParams.careerBreak,
        personalDetails?.language?.forEach((child: any) => {
          if (child.languageId) {
            const updatedChild = personalDetailsParams?.language?.find((item) => Number(item.languageId) === Number(child.languageId));
            if (updatedChild) {
              child.languageId = updatedChild.languageId,
                child.language = updatedChild.language,
                child.proficiency = updatedChild.proficiency,
                child.read = updatedChild.read,
                child.write = updatedChild.write,
                child.speak = updatedChild.speak
            }
          }
        });
      personalDetailsParams?.language?.forEach((child: any) => {
        if (!child.languageId) {
          personalDetails?.language.push(child);
        }
      })
      personalDetails = await personalDetailsRepository.save(personalDetails);
    } else {
      personalDetails = await personalDetailsRepository.save(personalDetailsParams)
    }
    return personalDetails;
  } catch (error) {
    throw error;
  }
}

export const updateJobSeekerProfileBasicDetails = async (id: number, jobSeekerParams: JobSeekerProfile) => {

  try {

    const jobSeekerProfileRepository = AppDataSource.manager.getRepository(JobSeekerProfile);
    const profileData = await jobSeekerProfileRepository.findOne({
      where: {
        id
      },
      relations: ['noticePeriod', 'totalExpMonth', 'totalExpYear', 'currentCurrency']

    });

    if (profileData) {
      profileData.noticePeriod = jobSeekerParams.noticePeriod;
      profileData.totalExpMonth = jobSeekerParams.totalExpMonth;
      profileData.totalExpYear = jobSeekerParams.totalExpYear;
      profileData.currentCountry = jobSeekerParams.currentCountry;
      profileData.currentSalary = jobSeekerParams.currentSalary;
      profileData.jobSeekerType = jobSeekerParams.jobSeekerType;
      profileData.currentLocation = jobSeekerParams.currentLocation;
      const jobSeekerProfile = await jobSeekerProfileRepository.save(profileData)
      return jobSeekerProfile;
    }

  } catch (error) {
    console.log('error', error);
    throw error;
  }
}