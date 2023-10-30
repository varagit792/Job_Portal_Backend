import { AppDataSource } from "../config/typeorm";
import { JobStatus } from "../entities/jobStatus.entity";

export const jobStatusList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(JobStatus)
      .createQueryBuilder("jobStatus").select("jobStatus")
      .where("jobStatus.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
