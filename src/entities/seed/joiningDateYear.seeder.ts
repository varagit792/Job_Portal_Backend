import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { JoiningDateYear } from '../joiningDateYear.entity';

export default class JoiningDateYearSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(JoiningDateYear);
    await repository.upsert([
      {
        title: '1980',
        status: true,
      }, {
        title: '1981',
        status: true,
      }, {
        title: '1982',
        status: true,
      }, {
        title: '1983',
        status: true,
      }, {
        title: '1984',
        status: true,
      }, {
        title: '1985',
        status: true,
      }, {
        title: '1986',
        status: true,
      }, {
        title: '1987',
        status: true,
      }, {
        title: '1988',
        status: true,
      }, {
        title: '1989',
        status: true,
      }, {
        title: '1990',
        status: true,
      }, {
        title: '1991',
        status: true,
      }, {
        title: '1992',
        status: true,
      }, {
        title: '1993',
        status: true,
      }, {
        title: '1994',
        status: true,
      }, {
        title: '1995',
        status: true,
      }, {
        title: '1996',
        status: true,
      }, {
        title: '1997',
        status: true,
      }, {
        title: '1998',
        status: true,
      }, {
        title: '1999',
        status: true,
      }, {
        title: '2000',
        status: true,
      }, {
        title: '2001',
        status: true,
      }, {
        title: '2002',
        status: true,
      }, {
        title: '2003',
        status: true,
      }, {
        title: '2004',
        status: true,
      }, {
        title: '2005',
        status: true,
      }, {
        title: '2006',
        status: true,
      }, {
        title: '2007',
        status: true,
      }, {
        title: '2008',
        status: true,
      }, {
        title: '2009',
        status: true,
      }, {
        title: '2010',
        status: true,
      }, {
        title: '2011',
        status: true,
      }, {
        title: '2012',
        status: true,
      }, {
        title: '2013',
        status: true,
      }, {
        title: '2014',
        status: true,
      }, {
        title: '2015',
        status: true,
      }, {
        title: '2016',
        status: true,
      }, {
        title: '2017',
        status: true,
      }, {
        title: '2018',
        status: true,
      }, {
        title: '2019',
        status: true,
      }, {
        title: '2020',
        status: true,
      }, {
        title: '2021',
        status: true,
      }, {
        title: '2022',
        status: true,
      }, {
        title: '2023',
        status: true,
      }
    ],
      ["id"]);

  }
}