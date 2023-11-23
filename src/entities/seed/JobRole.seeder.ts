import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { JobRole } from '../jobRole.entity';

export default class JobRoleSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(JobRole);
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
      //   title: 'Additive Manufacturing (3D Printing)',
      //   status: true,
      // },
      // {
      //   title: 'Application Engineer',
      //   status: true,
      // },
      // {
      //   title: 'Assembly Engineer',
      //   status: true,
      // },
      // {
      //   title: 'Automation Engineer',
      //   status: true,
      // },
      // {
      //   title: 'Design Engineer',
      //   status: true,
      // },
      // {
      //   title: 'Electrical / Electronics Engineer',
      //   status: true,
      // },
      // {
      //   title: 'Environmental Engineer',
      //   status: true,
      // },
      // {
      //   title: 'Industrial Engineer',
      //   status: true,
      // },
      // {
      //   title: 'Instrumentation Engineer',
      //   status: true,
      // },
      // {
      //   title: 'Manufacturing Engineer',
      //   status: true,
      // },
      // {
      //   title: 'Manufacturing Engineering Manager',
      //   status: true,
      // },
      // {
      //   title: 'Mechanical Engineer',
      //   status: true,
      // },
      // {
      //   title: 'Mechatronics Engineer',
      //   status: true,
      // },
      // {
      //   title: 'MEP Engineer',
      //   status: true,
      // },
      // {
      //   title: 'PPC Engineer',
      //   status: true,
      // },
      // {
      //   title: 'Process Engineer',
      //   status: true,
      // },
      // {
      //   title: 'Product Engineer',
      //   status: true,
      // },
      // {
      //   title: 'Production Engineer',
      //   status: true,
      // },
      // {
      //   title: 'Tool Room Engineer',
      //   status: true,
      // },
      // {
      //   title: 'Engineering - Other',
      //   status: true,
      // }
    ],
      ["id"]);

  }
}