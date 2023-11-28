import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Proficiency extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ unique: true })
    title!: string;

    @Column()
    status!: boolean
}