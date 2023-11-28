import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { AvailabilityToJoin } from '../availabilityToJoin.entity';

export default class AvailabilityToJoinSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(AvailabilityToJoin);
    await repository.upsert([
      {
        title: '15 Days or less',
        status: true,
      },
      {
        title: '1 Month',
        status: true,
      },
      {
        title: '2 Months',
        status: true,
      },
      {
        title: '3 Months',
        status: true,
      },
      {
        title: 'More than 3 Months',
        status: true,
      }
    ],
      ["id"]);

  }
}