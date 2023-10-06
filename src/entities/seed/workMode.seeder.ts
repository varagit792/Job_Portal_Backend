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
        title: 'In Office',
        status: true,
      },
      {
        title: 'Work from Home',
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