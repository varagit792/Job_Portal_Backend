import { AppDataSource } from "../config/typeorm";
import { Proficiency } from "../entities/proficiency.entity";

export const ProficiencyList = async () => {
    try {
        const queryResult = AppDataSource.getRepository(Proficiency)
            .createQueryBuilder("proficiency").select("proficiency")
            .where("proficiency.status = :status", { status: 1 })
            .getMany();
        return queryResult;
    } catch (error) {
        console.log('error', error);
        throw error;
    }
}