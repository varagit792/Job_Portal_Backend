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
        title: 'Engineering',
        status: true,
      },
      {
        title: 'Management',
        status: true,
      },
      {
        title: 'Operations, Maintenance & Support',
        status: true,
      },
      {
        title: 'Production & Manufacturing - Other',
        status: true,
      }
    ],
      ["id"]);

  }
}