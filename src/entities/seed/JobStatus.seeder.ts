import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { JobStatus } from '../jobStatus.entity';

export default class JobStatusSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(JobStatus);
    await repository.upsert([
      {
        title: 'Open',
        statusValue: 1,
        status: true,
      },
      {
        title: 'Close',
        statusValue: 0,
        status: true,
      },
      // {
      //   title: 'Pending',
      //   statusValue: 2,
      //   status: true,
      // }

    ],
      ["id"]);

  }
}