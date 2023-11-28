import { AppDataSource } from "../config/typeorm";
import { EducationType } from "../entities/educationType.entity";

export const educationTypeList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(EducationType)
      .createQueryBuilder("educationType").select("educationType")
      .where("educationType.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
