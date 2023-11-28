import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Gender } from '../gender.entity';

export default class GenderSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(Gender);
    await repository.upsert([
      {
        title: 'Male',
        status: true,
      },
      {
        title: 'Female',
        status: true,
      },
      {
        title: 'Transgender',
        status: true,
      }
    ],
      ["id"]);

  }
}