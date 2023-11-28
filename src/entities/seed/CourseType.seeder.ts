import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { CourseType } from '../courseType.entity';

export default class CourseTypeSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(CourseType);
    await repository.upsert([
      {
        title: 'Full Time',
        status: true,
      },
      {
        title: 'Part Time',
        status: true,
      },
      {
        title: 'Distance Learning',
        status: true,
      }
    ],
      ["id"]);

  }
}