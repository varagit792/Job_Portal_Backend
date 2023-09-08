import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Days } from '../days.entity';

export default class DaysSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
    ): Promise<any> {
        const repository = dataSource.getRepository(Days);
        await repository.upsert([
            {
                day: "1",
                status: true,
            },
            {
                day: "2",
                status: true,
            },
            {
                day: "3",
                status: true,
            },
            {
                day: "4",
                status: true,
            },
            {
                day: "5",
                status: true,
            },
            {
                day: "6",
                status: true,
            },
            {
                day: "7",
                status: true,
            },
            {
                day: "8",
                status: true,
            },
            {
                day: "9",
                status: true,
            },
            {
                day: "10",
                status: true,
            },
            {
                day: "11",
                status: true,
            },
            {
                day: "12",
                status: true,
            },
            {
                day: "13",
                status: true,
            },
            {
                day: "14",
                status: true,
            },
            {
                day: "15",
                status: true,
            },
            {
                day: "16",
                status: true,
            },
            {
                day: "17",
                status: true,
            },
            {
                day: "18",
                status: true,
            },
            {
                day: "19",
                status: true,
            },
            {
                day: "20",
                status: true,
            },
            {
                day: "21",
                status: true,
            },
            {
                day: "22",
                status: true,
            },
            {
                day: "23",
                status: true,
            },
            {
                day: "24",
                status: true,
            },
            {
                day: "25",
                status: true,
            },
            {
                day: "26",
                status: true,
            },
            {
                day: "27",
                status: true,
            },
            {
                day: "28",
                status: true,
            },
            {
                day: "29",
                status: true,
            },
            {
                day: "30",
                status: true,
            },
            {
                day: "31",
                status: true,
            },
        ],
            ["id"]);

    }
}