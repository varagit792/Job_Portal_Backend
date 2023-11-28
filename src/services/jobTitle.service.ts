import { AppDataSource } from "../config/typeorm";
import { JobTitle } from "../entities/jobTitle.entity";

export const jobTitleList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(JobTitle)
      .createQueryBuilder("jobTitle").select("jobTitle")
      .where("jobTitle.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
