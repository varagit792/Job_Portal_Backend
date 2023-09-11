import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { MaritalStatus } from '../maritalStatus.entity';

export default class MaritalStatusSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
    ): Promise<any> {
        const repository = dataSource.getRepository(MaritalStatus);
        await repository.upsert([
            {
                title: "Single/unmarried",
                status: true,
            },
            {
                title: "Married",
                status: true,
            },
            {
                title: "Widowed",
                status: true,
            },
            {
                title: "Divorced",
                status: true,
            },
            {
                title: "Separated",
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