import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { EmployeeType } from '../employeeType.entity';

export default class EmployeeTypeSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(EmployeeType);
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
        title: 'Internship',
        status: true,
      }
    ],
      ["id"]);

  }
}