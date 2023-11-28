import { AppDataSource } from "../config/typeorm";
import { MaritalStatus } from "../entities/maritalStatus.entity";

export const MaritalStatusList = async () => {
    try {
        const queryResult = AppDataSource.getRepository(MaritalStatus)
            .createQueryBuilder("maritalStatus").select("maritalStatus")
            .where("maritalStatus.status = :status", { status: 1 })
            .getMany();
        return queryResult;
    } catch (error) {
        console.log('error', error);
        throw error;
    }
}