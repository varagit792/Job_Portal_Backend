import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { RoleCategory } from '../roleCategory.entity';

export default class RoleCategorySeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(RoleCategory);
    await repository.upsert([
      
      {
        title: 'DBA / Data warehousing',
        status: true,
      },
      {
        title: 'DevOps',
        status: true,
      },
      {
        title: 'Quality Assurance and Testing',
        status: true,
      },
      {
        title: 'Software Development',
        status: true,
      },
      {
        title: 'Business Intelligence & Analytics',
        status: true,
      },
      {
        title: 'Data Science & Machine Learning',
        status: true,
      },
      {
        title: 'Data Science & Analytics - Other',
        status: true,
      },
      {
        title: 'Banking Operations',
        status: true,
      },
      {
        title: 'General Insurance',
        status: true,
      },
      {
        title: 'Investment Banking, Private Equity & VC',
        status: true,
      },
      {
        title: 'Lending',
        status: true,
      },
      {
        title: 'Life Insurance',
        status: true,
      },
      {
        title: 'Trading, Asset & Wealth Management',
        status: true,
      },
      {
        title: 'Treasury & Forex',
        status: true,
      },
      {
        title: 'BFSI, Investments & Trading - Other',
        status: true,
      }
      // {
      //   title: 'Engineering',
      //   status: true,
      // },
      // {
      //   title: 'Management',
      //   status: true,
      // },
      // {
      //   title: 'Operations, Maintenance & Support',
      //   status: true,
      // },
      // {
      //   title: 'Production & Manufacturing - Other',
      //   status: true,
      // }
    ],
      ["id"]);

  }
}