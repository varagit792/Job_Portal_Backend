import { Recurrence } from '../entities/recurrence.entity';
import { AppDataSource } from "../config/typeorm";

export const recurrenceList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(Recurrence)
      .createQueryBuilder("recurrence").select("recurrence")
      .where("recurrence.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
