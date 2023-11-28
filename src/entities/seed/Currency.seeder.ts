import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Currency } from '../currency.entity';

export default class CurrencySeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(Currency);
    await repository.upsert([
      {
        title: '₹',
        status: true,
      },
      {
        title: '$',
        status: true,
      }
    ],
      ["id"]);

  }
}