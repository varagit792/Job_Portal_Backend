import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Board } from '../board.entity';

export default class BoardSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(Board);
    await repository.upsert([
      {
        title: 'CBSE',
        status: true,
      }, {
        title: 'CISCE(ICSE/ISC)',
        status: true,
      }, {
        title: 'Diploma',
        status: true,
      }, {
        title: 'National',
        status: true,
      }, {
        title: 'Open',
        status: true,
      }, {
        title: 'School',
        status: true,
      }, {
        title: 'IB(International',
        status: true,
      }, {
        title: 'Baccalaureate)',
        status: true,
      }, {
        title: 'Andhra',
        status: true,
      }, {
        title: 'Pradesh',
        status: true,
      }, {
        title: 'Arunachal',
        status: true,
      }, {
        title: 'Pradesh',
        status: true,
      }, {
        title: 'Assam',
        status: true,
      }, {
        title: 'Bihar',
        status: true,
      }, {
        title: 'Chhattisgarh',
        status: true,
      }, {
        title: 'Goa',
        status: true,
      }, {
        title: 'Gujarat',
        status: true,
      }, {
        title: 'Haryana',
        status: true,
      }, {
        title: 'Himachal',
        status: true,
      }, {
        title: 'Pradesh',
        status: true,
      }, {
        title: 'J & K',
        status: true,
      }, {
        title: 'Jharkhand',
        status: true,
      }, {
        title: 'Karnataka',
        status: true,
      }, {
        title: 'Kerala',
        status: true,
      }, {
        title: 'Madhya',
        status: true,
      }, {
        title: 'Pradesh',
        status: true,
      }, {
        title: 'Maharashtra',
        status: true,
      }, {
        title: 'Manipur',
        status: true,
      }, {
        title: 'Meghalaya',
        status: true,
      }, {
        title: 'Mizoram',
        status: true,
      }, {
        title: 'Nagaland',
        status: true,
      }, {
        title: 'Odisha',
        status: true,
      }, {
        title: 'Punjab',
        status: true,
      }, {
        title: 'Rajasthan',
        status: true,
      }, {
        title: 'Tamil',
        status: true,
      }, {
        title: 'Nadu',
        status: true,
      }, {
        title: 'Telangana',
        status: true,
      }, {
        title: 'Tripura',
        status: true,
      }, {
        title: 'Uttar',
        status: true,
      }, {
        title: 'Pradesh',
        status: true,
      }, {
        title: 'Uttarakhand',
        status: true,
      }, {
        title: 'West Bengal ',
        status: true,
      }, {
        title: 'Other',
        status: true,
      }
    ],
      ["id"]);

  }
}