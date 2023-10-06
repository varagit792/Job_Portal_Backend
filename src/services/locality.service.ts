import { Locality } from '../entities/locality.entity';
import { AppDataSource } from "../config/typeorm";

export const localityList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(Locality)
      .createQueryBuilder("locality").select("locality")
      .where("locality.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
