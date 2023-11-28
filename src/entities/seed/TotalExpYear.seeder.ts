import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { TotalExpYear } from '../totalExpYear.entity';

export default class TotalExpYearSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(TotalExpYear);
    await repository.upsert([
      {
        title: '0 Year',
        status: true,
      },
      {
        title: '1 Year',
        status: true,
      },
      {
        title: '2 Year',
        status: true,
      },
      {
        title: '3 Year',
        status: true,
      },
      {
        title: '4 Year',
        status: true,
      },
      {
        title: '5 Year',
        status: true,
      },
      {
        title: '6 Year',
        status: true,
      },
      {
        title: '7 Year',
        status: true,
      },
      {
        title: '8 Year',
        status: true,
      },
      {
        title: '9 Year',
        status: true,
      },
      {
        title: '10 Year',
        status: true,
      },
      {
        title: '11 Year',
        status: true,
      },
      {
        title: '12 Year',
        status: true,
      },
      {
        title: '13 Year',
        status: true,
      },
      {
        title: '14 Year',
        status: true,
      },
      {
        title: '15 Year',
        status: true,
      },
      {
        title: '16 Year',
        status: true,
      },
      {
        title: '17 Year',
        status: true,
      },
      {
        title: '18 Year',
        status: true,
      },
      {
        title: '19 Year',
        status: true,
      },
      {
        title: '20 Year',
        status: true,
      },
      {
        title: '21 Year',
        status: true,
      },
      {
        title: '22 Year',
        status: true,
      },
      {
        title: '23 Year',
        status: true,
      },
      {
        title: '24 Year',
        status: true,
      },
      {
        title: '25 Year',
        status: true,
      },
      {
        title: '26 Year',
        status: true,
      },
      {
        title: '27 Year',
        status: true,
      },
      {
        title: '28 Year',
        status: true,
      }
      ,
      {
        title: '28 Year',
        status: true,
      }
      ,
      {
        title: '29 Year',
        status: true,
      },
      {
        title: '30 Year',
        status: true,
      },
      {
        title: '30+ Year',
        status: true,
      }
    ],
      ["id"]);

  }
}