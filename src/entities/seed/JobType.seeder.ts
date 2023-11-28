import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { JobType } from '../jobType.entity';

export default class JobTypeSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(JobType);
    await repository.upsert([
      {
        title: 'Permanent',
        status: true,
      },
      {
        title: 'Contractual',
        status: true,
      }

    ],
      ["id"]);

  }
}