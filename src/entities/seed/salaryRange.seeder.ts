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
        title: '1',
        status: true,
      },
      {
        title: '2',
        status: true,
      },
      {
        title: '3',
        status: true,
      },
      {
        title: '4',
        status: true,
      },
      {
        title: '5',
        status: true,
      },
      {
        title: '6',
        status: true,
      },
      {
        title: '7',
        status: true,
      },
      {
        title: '8',
        status: true,
      },
      {
        title: '9',
        status: true,
      },
      {
        title: '10',
        status: true,
      },
      {
        title: '11',
        status: true,
      },
      {
        title: '12',
        status: true,
      },
      {
        title: '13',
        status: true,
      },
      {
        title: '14',
        status: true,
      },
      {
        title: '15',
        status: true,
      },
      {
        title: '16',
        status: true,
      },
      {
        title: '17',
        status: true,
      },
      {
        title: '18',
        status: true,
      },
      {
        title: '19',
        status: true,
      },
      {
        title: '20',
        status: true,
      },
      {
        title: '21',
        status: true,
      },
      {
        title: '22',
        status: true,
      },
      {
        title: '23',
        status: true,
      },
      {
        title: '24',
        status: true,
      },
      {
        title: '25',
        status: true,
      },
      {
        title: '26',
        status: true,
      },
      {
        title: '27',
        status: true,
      },
      {
        title: '28',
        status: true,
      },
      {
        title: '29',
        status: true,
      },
      {
        title: '30',
        status: true,
      },
      {
        title: '31',
        status: true,
      },
      {
        title: '32',
        status: true,
      },
      {
        title: '33',
        status: true,
      },
      {
        title: '34',
        status: true,
      },
      {
        title: '35',
        status: true,
      },
      {
        title: '36',
        status: true,
      },
      {
        title: '38',
        status: true,
      },
      {
        title: '39',
        status: true,
      },
      {
        title: '40',
        status: true,
      },
      {
        title: '41',
        status: true,
      },
      {
        title: '42',
        status: true,
      },
      {
        title: '43',
        status: true,
      },
      {
        title: '44',
        status: true,
      },
      {
        title: '45',
        status: true,
      },
      {
        title: '46',
        status: true,
      },
      {
        title: '47',
        status: true,
      },
      {
        title: '48',
        status: true,
      },
      {
        title: '49',
        status: true,
      },
      {
        title: '50',
        status: true,
      },
    ],
      ["id"]);
  }
}