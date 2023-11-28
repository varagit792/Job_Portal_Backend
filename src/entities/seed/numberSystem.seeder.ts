import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { NumberSystem } from '../numberSystem.entity';

export default class NumberSystemSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(NumberSystem);
    await repository.upsert([
      {
        title: "Crore",
        status: true,
      },
      {
        title: "Lacs",
        status: true,
      },
      {
        title: "Thousand",
        status: true,
      }
    ],
      ["id"]);

  }
}