import { City } from '../entities/city.entity';
import { AppDataSource } from "../config/typeorm";

export const cityList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(City)
      .createQueryBuilder("city").select("city")
      .where("city.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
