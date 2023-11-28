import { AppDataSource } from "../config/typeorm";
import { PassOutYear } from "../entities/passOutYear.entity";

export const PassOutYearList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(PassOutYear)
      .createQueryBuilder("passOutYear").select("passOutYear")
      .where("passOutYear.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
