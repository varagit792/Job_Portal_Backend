import { AppDataSource } from "../config/typeorm";
import { Company } from "../entities/company.entity";

// export const companyList = async () => {
//   try {
//     const queryResult = AppDataSource.getRepository(Company)
//       .createQueryBuilder("company").select("company")
//       .where("company.status = :status", { status: 1 })
//       .innerJoin('company.location', 'location')
//       .getMany();
//     return queryResult;
//   } catch (error) {
//     console.log('error', error);
//     throw error;
//   }
// }

export const companyList = async () => {
  try {
    const companiesRepository = AppDataSource.getRepository(Company);
    const companies = await companiesRepository.find({
      relations: {
        location: true,
      },
    });

    return companies;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}