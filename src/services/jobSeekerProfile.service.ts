import { JobSeekerProfile } from '../entities/jobSeekerProfile.entity';
import { AppDataSource } from '../config/typeorm';
import { Education } from '../entities/education.entity';
import { CareerProfile } from '../entities/careerProfile.entity';
import { PersonalDetails } from '../entities/personalDetails.entity';
import { Language } from '../entities/language.entity';
import { In, Repository } from 'typeorm';
import 'dotenv/config';
import { Jobs } from '../entities/jobs.entity';
import { sendRecommendedJobAlerts } from '../utils/sendEmail';
import { User } from '../entities/user.entity';
import { generateToken } from '../utils/generateToken';

type Params = {
  jobSeekerType: string
  id: number;
  resumePath: string;
  resumeFile?: string;
  user: {
    id: number;
  }
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
      ...({ about: jobSeekerParams.about }),
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
        keySkills: { profileKeySkills: true },
        currentCompany: true,
        currentJobTitle: true,
        personalDetails: {
          language: true
        },
        educations: true,
        careerProfile: {
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
        },
        employments: {
          jobSeekerProfileEmploymentSkills: {
            keySkills: true
          },
          totalExpMonths: true,
          totalExpYears: true,
          noticePeriod: true,
          joiningDateYear: true,
          joiningDateMonth: true,
          location: true,
          currencyType: true,
          department: true,
        }
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

export const getCareerProfile = async (id: number) => {

  try {
    const careerProfileRepository = AppDataSource.getRepository(CareerProfile);
    const careerProfile = await careerProfileRepository.find({
      where: {
        id
      },
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
      personalDetails.id = Number(personalDetailsParams?.id);
      personalDetails.jobSeekerProfile = personalDetailsParams?.jobSeekerProfile,
        personalDetails.gender = personalDetailsParams?.gender,
        personalDetails.maritalStatus = personalDetailsParams?.maritalStatus,
        personalDetails.birthDate = personalDetailsParams?.birthDate,
        personalDetails.category = personalDetailsParams?.category,
        personalDetails.differentlyAbled = personalDetailsParams?.differentlyAbled,
        personalDetails.careerBreak = personalDetailsParams?.careerBreak,
        personalDetails.permanentAddress = personalDetailsParams?.permanentAddress,
        personalDetails.homeTown = personalDetailsParams?.homeTown,
        personalDetails.pinCode = personalDetailsParams?.pinCode,
        personalDetails?.language?.forEach((child: any) => {
          if (child.languageId) {
            const updatedChild = personalDetailsParams?.language?.find((item) => Number(item?.languageId) === Number(child?.languageId));
            if (updatedChild) {
              child.languageId = updatedChild?.languageId,
                child.language = updatedChild?.language,
                child.proficiency = updatedChild?.proficiency,
                child.read = updatedChild?.read,
                child.write = updatedChild?.write,
                child.speak = updatedChild?.speak
            }
          }
        });
      personalDetailsParams?.language?.forEach((child: any) => {
        if (!child?.languageId) {
          personalDetails?.language?.push(child);
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

export const deleteLanguages = async (languageParams: Language) => {
  try {
    AppDataSource.getRepository(Language)
      .createQueryBuilder()
      .delete()
      .from(Language)
      .where('languageId In(:languageId)', {
        languageId: languageParams,
      })
      .execute();
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
      relations: ['noticePeriod', 'totalExpMonth', 'totalExpYear', 'currentCurrency', 'currentCompany', 'currentJobTitle']
    });

    if (profileData) {
      profileData.noticePeriod = jobSeekerParams.noticePeriod;
      profileData.totalExpMonth = jobSeekerParams.totalExpMonth;
      profileData.totalExpYear = jobSeekerParams.totalExpYear;
      profileData.currentCountry = jobSeekerParams.currentCountry;
      profileData.currentSalary = jobSeekerParams.currentSalary;
      profileData.jobSeekerType = jobSeekerParams.jobSeekerType;
      profileData.currentLocation = jobSeekerParams.currentLocation;
      profileData.currentCompany = jobSeekerParams.currentCompany;
      profileData.currentJobTitle = jobSeekerParams.currentJobTitle;
      const jobSeekerProfile = await jobSeekerProfileRepository.save(profileData)
      return jobSeekerProfile;
    }

  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const jobSeekerProfileSweepWithCursor = async (jobSeekerProfileRepository: Repository<JobSeekerProfile>, batchSize: number, cursor: number | null) => {
  try {
    console.log('fetch cursor for jobSeekerProfile ', cursor);
    const queryBuilder = jobSeekerProfileRepository.createQueryBuilder('JobSeekerProfile')
      .orderBy('JobSeekerProfile.id')
      .take(batchSize)
      .leftJoinAndSelect('JobSeekerProfile.keySkills', 'keySkill')
      .leftJoinAndSelect('keySkill.profileKeySkills', 'profileKeySkills')
      .leftJoinAndSelect('JobSeekerProfile.user', 'users');

    if (cursor) {
      queryBuilder.where('JobSeekerProfile.id > :cursor', { cursor })
    }
    queryBuilder.andWhere('JobSeekerProfile.isSubscribedForAlerts = :isSubscribedForAlerts', { isSubscribedForAlerts: true })
    return queryBuilder.getMany();
  } catch (error) {
    console.log('error in sweep of jobSeekerProfile with cursor ', error);
    throw error;
  }
}


export const sweepBatchJobSeekerProfiles = async () => {
  try {

    let cursor = null;
    const jobSeekerProfileRepository = AppDataSource.getRepository(JobSeekerProfile);
    let batchSize = Number(process.env.BATCH_SIZE);

    while (true) {
      const data = await jobSeekerProfileSweepWithCursor(jobSeekerProfileRepository, batchSize, cursor);
      if (data.length === 0) {
        console.log('in break ', data.length);
        break;
      }
     
      await processFetchedJobSeekerData(data);
      cursor = data[data.length - 1]?.id
    }

  } catch (error) {
    console.log('error in sweepBatchJobSeeker ', error);
    throw error;
  }
}

export const processFetchedJobSeekerData = async (data: JobSeekerProfile[]) => {
  try {

    const jobSeekerSkills = data.map((jobSeekerProfile) => {
      const keySkills = jobSeekerProfile.keySkills.map((jobKeySkill) =>
        jobKeySkill.profileKeySkills.id
      )
      const jobSeekerSkillsData = {
       user:jobSeekerProfile.user,
        keySkills: keySkills
      }

      return jobSeekerSkillsData;
    })
    const limit = Number(process.env.BATCH_SIZE);

    const jobsRepository = AppDataSource.getRepository(Jobs);
    
    for (const jobSeeker of jobSeekerSkills) {
      await fetchJobsListForJobSeeker(jobsRepository, limit, jobSeeker);
    }

  } catch (error) {
    console.log('error in processFetched jobSeeker data ', error);
    throw error;
  }
}

export const fetchJobsListForJobSeeker = async (jobsRepository: Repository<Jobs>, limit: number, jobSeekerSkills: { user:User,keySkills: number[] }) => {
 
  try {
    const jobsList = await jobsRepository.find({
      order: {
        id: "DESC",
      },
      where: {
        jobsKeySkills: {
          keySkills: { id: In(jobSeekerSkills.keySkills) }
        }
      },
      relations: {
        jobsKeySkills: {
        keySkills:true
        },
        company: true,
        jobsLocation: {
          location:true
        }
      },
      take:limit
    });

    const token = await generateToken(jobSeekerSkills.user);

    const jobLinksList = jobsList.map((job) => {
      const jobLink = `http://localhost:4000/jobSeeker/recomemmendJobAlert/${token}/${job.id}`
      const jobData = { ...job, jobLink: jobLink };
      return jobData;
    })
    // console.log('jobs ', JSON.stringify(jobLinksList));
    if (jobsList.length > 0) {
      sendRecommendedJobAlerts(jobSeekerSkills.user.email, jobSeekerSkills.user.name, jobLinksList);
   }
 
  } catch (error) {
    console.log('error in fetch jobsList for jobSeeker')
    throw error;
  }
}

