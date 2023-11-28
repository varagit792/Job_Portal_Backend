import { WorkMode } from '../entities/workMode.entity';
import { AppDataSource } from "../config/typeorm";

export const workModeList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(WorkMode)
      .createQueryBuilder("workMode").select("workMode")
      .where("workMode.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
