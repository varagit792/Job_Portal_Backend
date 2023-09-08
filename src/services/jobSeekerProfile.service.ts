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

    // const careerProfileRepository = AppDataSource.getRepository(CareerProfile);
    // const careerProfile = await careerProfileRepository.save(careerProfileParams);
    // console.log("careerProfile Dev test-->", careerProfile);
    // return careerProfile;
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", careerProfileParams);

    AppDataSource.getRepository(CareerProfile)
      .createQueryBuilder("careerProfile").select("careerProfile")
      .where("careerProfile.jobSeekerProfile = :careerProfile", { careerProfile: careerProfileParams.jobSeekerProfile })
      .getOne().then(res => {
        console.log("MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM", res);
        if (res?.id) {
          console.log("UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU");

          // AppDataSource.getRepository(CareerProfileJobType)
          //   .createQueryBuilder("careerProfileJobType").delete()
          //   .where("careerProfileId = :careerProfile", { careerProfile: res?.id })
          //   .execute()
          // AppDataSource.getRepository(CareerProfileEmployeeType)
          //   .createQueryBuilder("careerProfileEmployeeType").delete()
          //   .where("careerProfileId = :careerProfileEmployeeType", { careerProfileEmployeeType: res?.id })
          //   .execute()
          // AppDataSource.getRepository(CareerProfilePreferredLocations)
          //   .createQueryBuilder("careerProfilePreferredLocations").delete()
          //   .where("careerProfileId = :careerProfilePreferredLocations", { careerProfilePreferredLocations: res?.id })
          //   .execute()
          // AppDataSource.getRepository(PreferredShift)
          //   .createQueryBuilder("preferredShift").delete()
          //   .where("careerProfileId = :preferredShift", { preferredShift: res?.id })
          //   .execute()

          AppDataSource.getRepository(CareerProfile)
            .createQueryBuilder("careerProfile").delete()
            .where("jobSeekerProfile = :jobSeekerProfile", { jobSeekerProfile: careerProfileParams.jobSeekerProfile })
            .execute()
        }
      });
    //console.log("00000000000000000000000000000000000000", res);


    //   console.log("#############################");

    //   AppDataSource.getRepository(CareerProfile).createQueryBuilder("jobSeekerProfile")
    //     .update<CareerProfile>(CareerProfile, { expectedSalary: careerProfileParams.expectedSalary, industry: careerProfileParams.industry, department: careerProfileParams.department, roleCategory: careerProfileParams.roleCategory, jobRole: careerProfileParams.jobRole, currency: careerProfileParams.currency })
    //     .where("jobSeekerProfile = :jobSeekerProfile", { jobSeekerProfile: careerProfileParams.jobSeekerProfile })
    //     .execute()

    //   // career_profile_employee_type
    //   AppDataSource.getRepository(CareerProfileEmployeeType)
    //     .createQueryBuilder("careerProfileEmployeeType").select("careerProfileEmployeeType")
    //     .where("careerProfileEmployeeType.careerProfile = :careerProfile", { careerProfile: careerProfileParams.jobSeekerProfile })
    //     .getOne().then(res => {
    //       if (res?.id) {
    //         AppDataSource.getRepository(CareerProfileEmployeeType)
    //           .createQueryBuilder("careerProfileEmployeeType").select("careerProfileEmployeeType")
    //           .where("careerProfileEmployeeType.careerProfile = :careerProfile", { careerProfile: careerProfileParams.careerProfileEmployeeType })
    //           .getMany().then(res => {
    //             res?.map((item) => {
    //               AppDataSource.getRepository(CareerProfileEmployeeType).createQueryBuilder("careerProfileEmployeeType")
    //                 .update<CareerProfileEmployeeType>(CareerProfileEmployeeType, { employeeType: item.employeeType })
    //                 .where("careerProfile = :careerProfile", { careerProfile: item.careerProfile })
    //                 .execute()
    //             })
    //           });
    //       } else {
    //         AppDataSource.getRepository(CareerProfileEmployeeType).createQueryBuilder().insert()
    //           .into(CareerProfileEmployeeType)
    //           .values([{ employeeType: careerProfileParams.careerProfileEmployeeType.toString }]).execute();
    //       }
    //     });


    //   //end of career_profile_employee_type

    // } else {
    console.log("careerProfileParams=============================", careerProfileParams);
    const careerProfileRepository = AppDataSource.getRepository(CareerProfile);
    const careerProfile = careerProfileRepository.save(careerProfileParams);
    console.log("careerProfile Dev test-->", careerProfile);
    return careerProfile;


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
    console.log("personalDetailsParams", personalDetailsParams);
    let personalDetails: any;
    const personalDetailsRepository = AppDataSource.getRepository(PersonalDetails);
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
      personalDetails = await personalDetailsRepository.save(personalDetailsParams)
    }
    return personalDetails;
  } catch (error) {
    throw error;
  }
}