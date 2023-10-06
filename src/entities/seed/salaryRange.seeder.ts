import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { SalaryRange } from '../salaryRange.entity';

export default class SalaryRangeSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(SalaryRange);
    await repository.upsert([
      {
        title: '0',
        status: true,
      },
      {
        title: '10000',
        status: true,
      },
      {
        title: '20000',
        status: true,
      },
      {
        title: '30000',
        status: true,
      },
      {
        title: '40000',
        status: true,
      },
      {
        title: '50000',
        status: true,
      },
      {
        title: '60000',
        status: true,
      },
      {
        title: '70000',
        status: true,
      },
      {
        title: '80000',
        status: true,
      },
      {
        title: '90000',
        status: true,
      },
      {
        title: '1',
        status: true,
      },
      {
        title: '5',
        status: true,
      },
      {
        title: '10',
        status: true,
      },
      {
        title: '15',
        status: true,
      },
      {
        title: '20',
        status: true,
      },
      {
        title: '25',
        status: true,
      },
      {
        title: '30',
        status: true,
      },
      {
        title: '35',
        status: true,
      },
      {
        title: '40',
        status: true,
      },
      {
        title: '45',
        status: true,
      },
      {
        title: '50',
        status: true,
      },
      {
        title: '60',
        status: true,
      },
      {
        title: '70',
        status: true,
      },
      {
        title: '80',
        status: true,
      },
      {
        title: '90',
        status: true,
      }

    ],
      ["id"]);

  }
}