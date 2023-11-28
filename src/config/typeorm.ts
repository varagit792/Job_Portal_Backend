import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import 'dotenv/config';

if (process.env.DB_NAME === undefined) {
  throw new Error('Dbname cannot be undefined')
}
if (process.env.DB_USERNAME === undefined) {
  throw new Error('username cannot be undefined')
}
if (process.env.DB_PASSWORD === undefined) {
  throw new Error('password cannot be undefined')
}
if (process.env.DB_HOST === undefined) {
  throw new Error('db host cannot be undefined')
}
if (process.env.DB_POOL_MAX === undefined) {
  throw new Error('pool max cannot be undefined')
}
if (process.env.DB_POOL_MIN === undefined) {
  throw new Error('pool min Not be undefined')
}
if (process.env.DB_POOL_ACQUIRE === undefined) {
  throw new Error('Dbname Not be undefined')
}
if (process.env.DB_POOL_IDLE === undefined) {
  throw new Error('pool idle Not be undefined')
} if (process.env.DB_PORT === undefined) {
  throw new Error('pool idle Not be undefined')
}

const options: DataSourceOptions & SeederOptions = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  // logging: true,
  entities: [__dirname + '/../**/*.entity.js'],
  seeds: [__dirname + '/../**/*.seeder.js'],
  subscribers: [],
  migrations: [],
}

export const AppDataSource = new DataSource(options);





