import { AppDataSource } from "../config/typeorm";
import { Industry } from "../entities/industry.entity";

export const industryList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(Industry)
      .createQueryBuilder("industry").select("industry")
      .where("industry.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
