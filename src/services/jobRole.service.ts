import { AppDataSource } from "../config/typeorm";
import { JobRole } from "../entities/jobRole.entity";

export const jobRoleList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(JobRole)
      .createQueryBuilder("jobRole").select("jobRole")
      .where("jobRole.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
