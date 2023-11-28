import { AppDataSource } from "../config/typeorm";
import { TotalExpYear } from "../entities/totalExpYear.entity";

export const totalExpYearList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(TotalExpYear)
      .createQueryBuilder("totalExpYear").select("totalExpYear")
      .where("totalExpYear.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
