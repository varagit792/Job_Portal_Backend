import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Specialization } from '../specialization.entity';

export default class SpecializationSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(Specialization);
    await repository.upsert([
      {
        title: 'Architecture',
        status: true,
      },
      {
        title: 'Chemical',
        status: true,
      },
      {
        title: 'Civil',
        status: true,
      },
      {
        title: 'Computers',
        status: true,
      },
      {
        title: 'Electrical',
        status: true,
      },
      {
        title: 'Electronics/Telecommunication',
        status: true,
      },
      {
        title: 'Engineering',
        status: true,
      },
      {
        title: 'Export/Import',
        status: true,
      },
      {
        title: 'Fashion Designing/Other Designing',
        status: true,
      },
      {
        title: 'Graphic/ Web Designing',
        status: true,
      },
      {
        title: 'Hotel Management',
        status: true,
      },
      {
        title: 'Insurance',
        status: true,
      },
      {
        title: 'Management',
        status: true,
      },
      {
        title: 'Mechanical',
        status: true,
      },
      {
        title: 'Tourism',
        status: true,
      },
      {
        title: 'Visual Arts',
        status: true,
      },
      {
        title: 'Vocational Course',
        status: true,
      },
      {
        title: 'Other Specialization',
        status: true,
      }
    ],
      ["id"]);

  }
}