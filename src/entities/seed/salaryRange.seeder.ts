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
        title: '1.5',
        status: true,
      },
      {
        title: '2',
        status: true,
      },
      {
        title: '2.5',
        status: true,
      },
      {
        title: '3',
        status: true,
      },
      {
        title: '3.5',
        status: true,
      },
      {
        title: '4',
        status: true,
      },
      {
        title: '4.5',
        status: true,
      },
      {
        title: '5',
        status: true,
      },
      {
        title: '5.5',
        status: true,
      },
      {
        title: '6',
        status: true,
      },
      {
        title: '6.5',
        status: true,
      },
      {
        title: '7',
        status: true,
      },
      {
        title: '7.5',
        status: true,
      },
      {
        title: '8',
        status: true,
      },
      {
        title: '8.5',
        status: true,
      },
      {
        title: '9',
        status: true,
      },
      {
        title: '9.5',
        status: true,
      },
      {
        title: '10',
        status: true,
      },
      {
        title: '10.5',
        status: true,
      },
      {
        title: '11',
        status: true,
      },
      {
        title: '11.5',
        status: true,
      },
      {
        title: '12',
        status: true,
      },
      {
        title: '12.5',
        status: true,
      },
      {
        title: '13',
        status: true,
      },
      {
        title: '13.5',
        status: true,
      },
      {
        title: '14',
        status: true,
      },
      {
        title: '14.5',
        status: true,
      },
      {
        title: '15',
        status: true,
      },
      {
        title: '15.5',
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
        title: '37',
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
      {
        title: '56',
        status: true,
      },
      {
        title: '57',
        status: true,
      },
      {
        title: '58',
        status: true,
      },
      {
        title: '59',
        status: true,
      },
      {
        title: '60',
        status: true,
      },
      {
        title: '61',
        status: true,
      },
      {
        title: '62',
        status: true,
      },
      {
        title: '63',
        status: true,
      },
      {
        title: '64',
        status: true,
      },
      {
        title: '65',
        status: true,
      }
    ],
      ["id"]);
  }
}