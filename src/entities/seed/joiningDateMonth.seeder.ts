import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { JoiningDateMonth } from '../joiningDateMonth.entity';

export default class JoiningDateMonthSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(JoiningDateMonth);
    await repository.upsert([
      {
        title: 'Jan',
        status: true,
      }, {
        title: 'Feb',
        status: true,
      }, {
        title: 'Mar',
        status: true,
      }, {
        title: 'Apr',
        status: true,
      }, {
        title: 'May',
        status: true,
      }, {
        title: 'June',
        status: true,
      }, {
        title: 'July',
        status: true,
      }, {
        title: 'Aug',
        status: true,
      }, {
        title: 'Sep',
        status: true,
      }, {
        title: 'Oct',
        status: true,
      }, {
        title: 'Nov',
        status: true,
      }, {
        title: 'Dec',
        status: true,
      }
    ],
      ["id"]);

  }
}