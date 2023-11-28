import { AppDataSource } from "../config/typeorm";
import { Gender } from "../entities/gender.entity";

export const genderList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(Gender)
      .createQueryBuilder("gender").select("gender")
      .where("gender.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
