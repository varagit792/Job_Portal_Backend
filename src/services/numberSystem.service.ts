import { NumberSystem } from '../entities/numberSystem.entity';
import { AppDataSource } from "../config/typeorm";

export const numberSystemList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(NumberSystem)
      .createQueryBuilder("numberSystem").select("numberSystem")
      .where("numberSystem.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
