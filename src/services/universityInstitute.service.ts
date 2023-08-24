import { AppDataSource } from "../config/typeorm";
import { Company } from "../entities/company.entity";
import { UniversityInstitute } from "../entities/universityInstitute.entity";

export const universityInstituteList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(UniversityInstitute)
      .createQueryBuilder("universityInstitute").select("universityInstitute")
      .where("universityInstitute.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
