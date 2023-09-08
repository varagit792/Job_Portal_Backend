import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Days extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ unique: true })
    day!: string;

    @Column()
    status!: boolean
}