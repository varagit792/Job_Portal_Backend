import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { City } from '../city.entity';

export default class CitySeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(City);
    await repository.upsert([
      {
        title: 'Port Blair',
        status: true,
      },
      {
        title: 'Andhra Pradesh',
        status: true,
      },
      {
        title: 'Adoni',
        status: true,
      },
      {
        title: 'Amaravati',
        status: true,
      },
      {
        title: 'Anantapur',
        status: true,
      },
      {
        title: 'Chandragiri',
        status: true,
      }

    ],
      ["id"]);

  }
}