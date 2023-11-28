import { AppDataSource } from "../config/typeorm";
import { Department } from "../entities/department.entity";

export const departmentList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(Department)
      .createQueryBuilder("department").select("department")
      .where("department.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
