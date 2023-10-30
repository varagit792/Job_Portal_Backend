import { AppDataSource } from "../config/typeorm";
import { JobExpiry } from "../entities/jobExpiry.entity";

export const jobExpiryList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(JobExpiry)
      .createQueryBuilder("jobExpiry").select("jobExpiry")
      .where("jobExpiry.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
