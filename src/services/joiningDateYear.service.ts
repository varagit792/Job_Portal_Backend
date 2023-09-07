import { AppDataSource } from "../config/typeorm";
import { JoiningDateYear } from "../entities/joiningDateYear.entity";

export const joiningDateYearList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(JoiningDateYear)
      .createQueryBuilder("joiningDateYear").select("joiningDateYear")
      .where("joiningDateYear.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
