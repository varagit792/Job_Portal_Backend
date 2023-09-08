import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ unique: true })
    title!: string;

    @Column()
    status!: boolean
}