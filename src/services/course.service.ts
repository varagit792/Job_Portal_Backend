import { AppDataSource } from "../config/typeorm";
import { Course } from "../entities/course.entity";

export const courseList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(Course)
      .createQueryBuilder("course").select("course")
      .where("course.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
