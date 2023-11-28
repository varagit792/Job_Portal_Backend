import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { EducationType } from '../educationType.entity';

export default class EducationTypeSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(EducationType);
    await repository.upsert([
      {
        title: '10th',
        status: true,
      },
      {
        title: '12th',
        status: true,
      },
      {
        title: 'Graduation/Diploma',
        status: true,
      },
      {
        title: 'Masters/Post-graduation',
        status: true,
      },
      {
        title: 'Doctorate/PhD',
        status: true,
      }
    ],
      ["id"]);
  }
}