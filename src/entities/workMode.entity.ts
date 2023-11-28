import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne } from 'typeorm';
import { Jobs } from './jobs.entity';

@Entity()
export class WorkMode extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  title!: string;

  @Column()
  status!: boolean

  @OneToOne(() => Jobs, (jobs) => jobs.workMode)
  jobs!: Jobs

}