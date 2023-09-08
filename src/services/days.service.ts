import { AppDataSource } from "../config/typeorm";
import { Days } from "../entities/days.entity";

export const DaysList = async () => {
    try {
        const queryResult = AppDataSource.getRepository(Days)
            .createQueryBuilder("days").select("days")
            .where("days.status = :status", { status: 1 })
            .getMany();
        return queryResult;
    } catch (error) {
        console.log('error', error);
        throw error;
    }
}