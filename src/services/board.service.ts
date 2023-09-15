import { AppDataSource } from "../config/typeorm";
import { Board } from "../entities/board.entity";

export const BoardList = async () => {
    try {
        const queryResult = AppDataSource.getRepository(Board)
            .createQueryBuilder("board").select("board")
            .where("board.status = :status", { status: 1 })
            .getMany();
        return queryResult;
    } catch (error) {
        console.log('error', error);
        throw error;
    }
}