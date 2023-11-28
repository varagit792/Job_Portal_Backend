import { AppDataSource } from "../config/typeorm";
import { NoticePeriod } from "../entities/noticePeriod.entity";

export const noticePeriodList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(NoticePeriod)
      .createQueryBuilder("noticePeriod").select("noticePeriod")
      .where("noticePeriod.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
