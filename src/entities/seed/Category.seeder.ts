import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Category } from '../category.entity';

export default class CategorySeeder implements Seeder {
    public async run(
        dataSource: DataSource,
    ): Promise<any> {
        const repository = dataSource.getRepository(Category);
        await repository.upsert([
            {
                title: "General",
                status: true,
            },
            {
                title: "Scheduled Caste (SC)",
                status: true,
            },
            {
                title: "Scheduled Tribe (ST)",
                status: true,
            },
            {
                title: "OBC - Creamy",
                status: true,
            },
            {
                title: "OBC - Non creamy",
                status: true,
            },
            {
                title: "Other",
                status: true,
            },
        ],
            ["id"]);

    }
}