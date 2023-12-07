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
        title: 'Automation Architect',
        status: true,
      },
      {
        title: 'Automation Developer',
        status: true,
      },
      {
        title: 'Back End Developer',
        status: true,
      },
      {
        title: 'Big Data Engineer',
        status: true,
      },
      {
        title: 'CRM Architect',
        status: true,
      },
      {
        title: 'Data Engineer',
        status: true,
      },
      {
        title: 'Data Platform Engineer',
        status: true,
      },
      {
        title: 'Embedded Systems Engineer',
        status: true,
      },
      {
        title: 'Engineering Manager',
        status: true,
      },
      {
        title: 'ERP Architect',
        status: true,
      },
      {
        title: 'ERP Developer',
        status: true,
      },
      {
        title: 'Front End Developer',
        status: true,
      },
      {
        title: 'Full Stack Developer',
        status: true,
      },
      {
        title: 'Game Developer / Programmer',
        status: true,
      },
      {
        title: 'Head - Engineering',
        status: true,
      },
      {
        title: 'Mobile / App Developer',
        status: true,
      },
      {
        title: 'Practice Manager / Head',
        status: true,
      },
      {
        title: 'Search Engineer',
        status: true,
      },
      {
        title: 'Solution Architect',
        status: true,
      },
      {
        title: 'Technical Architect',
        status: true,
      },
      {
        title: 'Technical Lead',
        status: true,
      },
      {
        title: 'Webmaster',
        status: true,
      },
      {
        title: 'Software Development - Other',
        status: true,
      },
      {
        title: 'AR VR QA Tester',
        status: true,
      },
      {
        title: 'Automation Test Engineer',
        status: true,
      },
      {
        title: 'Blockchain Quality Assurance Engineer',
        status: true,
      },
      {
        title: 'Data / Big Data Testing Engineer',
        status: true,
      },
      {
        title: 'Game Tester',
        status: true,
      },
      {
        title: 'Head - QA',
        status: true,
      },
      {
        title: 'Manual Test Engineer',
        status: true,
      },
      {
        title: 'Mobile Apps Testing Engineer',
        status: true,
      },
      {
        title: 'Performance Testing Engineer',
        status: true,
      },
      {
        title: 'Post Silicon Test Engineer',
        status: true,
      },
      {
        title: 'Pre Silicon Test Engineer',
        status: true,
      },
      {
        title: 'QA Team Manager',
        status: true,
      },
      {
        title: 'Robotic Test Engineer',
        status: true,
      },
      {
        title: 'Security Testing Engineer',
        status: true,
      },
      {
        title: 'Software Developer in Test (SDET)',
        status: true,
      },
      {
        title: 'Test Analyst',
        status: true,
      },
      {
        title: 'Test Architect',
        status: true,
      },
      {
        title: 'White Box Testing Engineer',
        status: true,
      },
      {
        title: 'Quality Assurance and Testing - Other',
        status: true,
      },
      {
        title: 'Data warehouse Architect / Consultant',
        status: true,
      },
      {
        title: 'Data warehouse Developer',
        status: true,
      },
      {
        title: 'Data warehouse Manager',
        status: true,
      },
      {
        title: 'Database Administrator',
        status: true,
      },
      {
        title: 'Database Analyst',
        status: true,
      },
      {
        title: 'Database Architect / Designer',
        status: true,
      },
      {
        title: 'Database Developer / Engineer',
        status: true,
      },
      {
        title: 'Database Manager',
        status: true,
      },
      {
        title: 'ETL Developer',
        status: true,
      },
      {
        title: 'Head - Data Base',
        status: true,
      },
      {
        title: 'MIS Manager',
        status: true,
      },
      {
        title: 'DBA / Data warehousing - Other',
        status: true,
      },
      {
        title: 'DevOps Consultant / Architect',
        status: true,
      },
      {
        title: 'DevOps Engineer',
        status: true,
      },
      {
        title: 'DevOps Manager',
        status: true,
      },
      {
        title: 'Head - DevOps',
        status: true,
      },
      {
        title: 'Release Engineer',
        status: true,
      },
      {
        title: 'Release Manager',
        status: true,
      },
      {
        title: 'Site Reliability Engineer',
        status: true,
      },
      {
        title: 'DevOps - Other',
        status: true,
      },
      {
        title: 'Computer Vision',
        status: true,
      },
      {
        title: 'Data Engineer',
        status: true,
      },
      {
        title: 'Data Scientist',
        status: true,
      },
      {
        title: 'Full Stack Data Scientist',
        status: true,
      },
      {
        title: 'Head - Data Science',
        status: true,
      },
      {
        title: 'Machine Learning Engineer',
        status: true,
      },
      {
        title: 'Manager - Data Science',
        status: true,
      },
      {
        title: 'Manager - Machine Learning',
        status: true,
      },
      {
        title: 'NLP / DL Engineering / Architect',
        status: true,
      },
      {
        title: 'Statistician',
        status: true,
      },
      {
        title: 'Data Science & Machine Learning - Other',
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