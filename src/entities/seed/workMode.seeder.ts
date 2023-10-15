import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { WorkMode } from '../workMode.entity';

export default class WorkModeSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(WorkMode);
    await repository.upsert([
      {
        title: 'Work from office',
        status: true,
      },
      {
        title: 'On-site',
        status: true,
      },
      {
        title: 'Remote',
        status: true,
      },
      {
        title: 'Hybrid',
        status: true,
      }
    ],
      ["id"]);

  }
}