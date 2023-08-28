import { AppDataSource } from "../config/typeorm";
import { JobSeekerProfile } from "../entities/jobSeekerProfile.entity";
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

export const keySkills = async ({ posts }: any) => {
  const { keySkills, userId } = posts;
  try {
    AppDataSource.getRepository(JobSeekerProfile)
      .createQueryBuilder("jobSeekerProfile").select("jobSeekerProfile")
      .where("jobSeekerProfile.userId = :userId", { userId: userId })
      .getOne().then(res => {
        if (res?.id) {
          AppDataSource.getRepository(JobSeekerProfile).createQueryBuilder("jobSeekerProfile")
            .update<JobSeekerProfile>(JobSeekerProfile, { keySkills: keySkills })
            .where("userId = :id", { id: userId })
            .execute()
        } else {
          AppDataSource.getRepository(JobSeekerProfile).createQueryBuilder().insert()
            .into(JobSeekerProfile)
            .values([{ keySkills: keySkills, user: userId }]).execute();
        }
      });
    const queryResult = AppDataSource.getRepository(JobSeekerProfile)
      .createQueryBuilder("jobSeekerProfile").select("jobSeekerProfile")
      .where("jobSeekerProfile.userId = :userId", { userId: userId })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const keySkillsGet = async ({ id }: any) => {
  try {
    const queryResult = AppDataSource.getRepository(JobSeekerProfile)
      .createQueryBuilder("jobSeekerProfile").select("jobSeekerProfile")
      .where("jobSeekerProfile.userId = :userId", { userId: id })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

