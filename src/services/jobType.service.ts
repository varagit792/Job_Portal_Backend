import { AppDataSource } from "../config/typeorm";
import { JobType } from "../entities/jobType.entity";

export const jobTypeList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(JobType)
      .createQueryBuilder("jobType").select("jobType")
      .where("jobType.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
