import { AppDataSource } from "../config/typeorm";
import { PreferredShift } from "../entities/preferredShift.entity";

export const preferredShiftList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(PreferredShift)
      .createQueryBuilder("preferredShift").select("preferredShift")
      .where("preferredShift.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
