import { AppDataSource } from "../config/typeorm";
import { Currency } from "../entities/currency.entity";

export const currencyList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(Currency)
      .createQueryBuilder("currency").select("currency")
      .where("currency.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
