import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Proficiency } from '../proficiency.entity';

export default class ProficiencySeeder implements Seeder {
    public async run(
        dataSource: DataSource,
    ): Promise<any> {
        const repository = dataSource.getRepository(Proficiency);
        await repository.upsert([
            {
                title: "Beginner",
                status: true,
            },
            {
                title: "Proficient",
                status: true,
            },
            {
                title: "Expert",
                status: true,
            },
        ],
            ["id"]);

    }
}