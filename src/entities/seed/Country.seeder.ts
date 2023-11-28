import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Country } from '../country.entity';

export default class CountrySeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(Country);
    await repository.upsert([
      {
        title: 'India',
        status: true,
      },
      {
        title: 'United State',
        status: true,
      }

    ],
      ["id"]);

  }
}