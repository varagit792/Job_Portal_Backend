import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { JobExpiry } from '../jobExpiry.entity';

export default class JobExpirySeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(JobExpiry);
    await repository.upsert([
      {
        title: 'Just one day',
        numberOfDays: 1,
        status: true,
      },
      {
        title: '1 Week',
        numberOfDays: 7,
        status: true,
      },
      {
        title: '10 Days',
        numberOfDays: 10,
        status: true,
      },
      {
        title: '15 Days',
        numberOfDays: 15,
        status: true,
      },
      {
        title: '20 Days',
        numberOfDays: 20,
        status: true,
      },
      {
        title: '25 Days',
        numberOfDays: 25,
        status: true,
      },
      {
        title: '1 Month',
        numberOfDays: 30,
        status: true,
      },
      {
        title: '2 Months',
        numberOfDays: 60,
        status: true,
      },
      {
        title: '3 Months',
        numberOfDays: 90,
        status: true,
      },
      {
        title: '4 Months',
        numberOfDays: 120,
        status: true,
      },
      {
        title: '5 Months',
        numberOfDays: 150,
        status: true,
      },
      {
        title: '6 Months',
        numberOfDays: 180,
        status: true,
      },
      {
        title: '1 Year',
        numberOfDays: 365,
        status: true,
      },

    ],
      ["id"]);

  }
}