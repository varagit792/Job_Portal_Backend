import { AppDataSource } from "../config/typeorm";
import { RoleCategory } from "../entities/roleCategory.entity";

export const roleCategoryList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(RoleCategory)
      .createQueryBuilder("roleCategory").select("roleCategory")
      .where("roleCategory.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
