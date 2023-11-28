import { AppDataSource } from "../config/typeorm";
import { Location } from "../entities/location.entity";

export const locationList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(Location)
      .createQueryBuilder("location").select("location")
      .where("location.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
