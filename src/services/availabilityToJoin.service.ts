import { AppDataSource } from "../config/typeorm";
import { AvailabilityToJoin } from '../entities/availabilityToJoin.entity';

export const availabilityToJoinList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(AvailabilityToJoin)
      .createQueryBuilder("availabilityToJoin").select("availabilityToJoin")
      .where("availabilityToJoin.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
