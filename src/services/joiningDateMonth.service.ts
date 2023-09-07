import { AppDataSource } from "../config/typeorm";
import { JoiningDateMonth } from "../entities/joiningDateMonth.entity";

export const joiningDateMonthList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(JoiningDateMonth)
      .createQueryBuilder("joiningDateMonth").select("joiningDateMonth")
      .where("joiningDateMonth.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
