import { AppDataSource } from "../config/typeorm";
import { JobSeekerProfile } from "../entities/jobSeekerProfile.entity";
import { JobSeekerProfileKeySkills } from "../entities/jobSeekerProfileKeySkills.entity";
import { KeySkills } from "../entities/keySkills.entity";

export const keySkillsList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(KeySkills)
      .createQueryBuilder("keySkills").select("keySkills")
      .where("keySkills.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const keySkills = async ({ keySkills, jobSeekerId }: any) => {
  try {
    const jobSeekerProfileKeySkillsRepository = AppDataSource.getRepository(JobSeekerProfileKeySkills);
    await jobSeekerProfileKeySkillsRepository.delete({ jobSeekerProfileKeySkills: jobSeekerId as any }).then(async () => {
      if (keySkills) {
        for (let i = 0; i < keySkills?.length; i++) {
          let keySkill: any = new Object();
          keySkill.jobSeekerProfileKeySkills = jobSeekerId;
          keySkill.profileKeySkills = keySkills[i];
          await jobSeekerProfileKeySkillsRepository.save(keySkill);
        }
      }
      const jobSeekerProfileRepository = AppDataSource.getRepository(JobSeekerProfile)
      const resultKeySkills = await jobSeekerProfileRepository.find({
        relations: {
          keySkills: { profileKeySkills: true }
        },
        where: {
          id: jobSeekerId
        }
      })
      return resultKeySkills;
    })
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const keySkillsGet = async ({ id }: any) => {
  try {
    const jobSeekerProfileRepository = AppDataSource.getRepository(JobSeekerProfile)
    const resultKeySkills = await jobSeekerProfileRepository.find({
      relations: {
        keySkills: { profileKeySkills: true }
      },
      where: {
        user: id
      }
    })
    return resultKeySkills;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

