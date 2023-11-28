import { State } from '../entities/state.entity';
import { AppDataSource } from "../config/typeorm";

export const stateList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(State)
      .createQueryBuilder("state").select("state")
      .where("state.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
