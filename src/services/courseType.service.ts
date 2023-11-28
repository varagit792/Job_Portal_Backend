import { AppDataSource } from "../config/typeorm";
import { CourseType } from "../entities/courseType.entity";

export const courseTypeList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(CourseType)
      .createQueryBuilder("courseType").select("courseType")
      .where("courseType.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
