import { AppDataSource } from "../config/typeorm";
import { Category } from "../entities/category.entity";

export const CategoryList = async () => {
    try {
        const queryResult = AppDataSource.getRepository(Category)
            .createQueryBuilder("category").select("category")
            .where("category.status = :status", { status: 1 })
            .getMany();
        return queryResult;
    } catch (error) {
        console.log('error', error);
        throw error;
    }
}