import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { CompanyType } from '../companyType.entity';

export default class CompanyTypeSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(CompanyType);
    await repository.upsert([
      {
        title: 'Corporate',
        status: true,
      },
      {
        title: 'Foreign MNC',
        status: true,
      },
      {
        title: 'Indian MNC',
        status: true,
      },
      {
        title: 'Startup',
        status: true,
      },
      {
        title: 'Govt/PSU',
        status: true,
      },
      {
        title: 'MNC',
        status: true,
      },
      {
        title: 'Others',
        status: true,
      }
    ],
      ["id"]);

  }
}