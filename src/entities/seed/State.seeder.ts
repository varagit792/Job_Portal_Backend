import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { State } from '../state.entity';

export default class StateSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(State);
    await repository.upsert([
      {
        title: 'Andhra Pradesh',
        status: true,
      },
      {
        title: 'Arunachal Pradesh',
        status: true,
      }


    ],
      ["id"]);

  }
}