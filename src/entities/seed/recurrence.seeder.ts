import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Recurrence } from '../recurrence.entity';

export default class RecurrenceSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(Recurrence);
    await repository.upsert([
      {
        title: "Daily",
        status: true,
      },
      {
        title: "Weekly",
        status: true,
      },
      {
        title: "P.M.",
        status: true,
      },
      {
        title: "P.A.",
        status: true,
      }
    ],
      ["id"]);

  }
}