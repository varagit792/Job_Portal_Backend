import { AppDataSource } from "../config/typeorm";
import { CompanyType } from "../entities/companyType.entity";

export const companyTypeList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(CompanyType)
      .createQueryBuilder("companyType").select("companyType")
      .where("companyType.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
