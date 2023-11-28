import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { JobType } from '../jobType.entity';
import { PreferredShift } from '../preferredShift.entity';

export default class PreferredShiftSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(PreferredShift);
    await repository.upsert([
      {
        title: 'Day',
        status: true,
      },
      {
        title: 'Night',
        status: true,
      },
      {
        title: 'Flexible',
        status: true,
      }

    ],
      ["id"]);

  }
}