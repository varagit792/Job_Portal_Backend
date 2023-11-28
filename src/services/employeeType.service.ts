import { AppDataSource } from "../config/typeorm";
import { EmployeeType } from "../entities/employeeType.entity";

export const employeeTypeList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(EmployeeType)
      .createQueryBuilder("employeeType").select("employeeType")
      .where("employeeType.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
