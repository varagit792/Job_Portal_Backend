import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { TotalExpMonth } from '../totalExpMonth.entity';

export default class TotalExpMonthSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(TotalExpMonth);
    await repository.upsert([
      {
        title: '0 Month',
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
        title: '4 Months',
        status: true,
      },
      {
        title: '5 Months',
        status: true,
      },
      {
        title: '7 Months',
        status: true,
      },
      {
        title: '8 Months',
        status: true,
      },
      {
        title: '9 Months',
        status: true,
      },
      {
        title: '10 Months',
        status: true,
      },
      {
        title: '11 Months',
        status: true,
      }
    ],
      ["id"]);

  }
}