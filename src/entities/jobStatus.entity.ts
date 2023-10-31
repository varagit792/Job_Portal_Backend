import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne } from 'typeorm';
import { Jobs } from './jobs.entity';

@Entity()
export class JobStatus extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  title!: string;

  @Column({ unique: true })
  statusValue!: number;

  @Column()
  status!: boolean

  @OneToOne(() => Jobs, (jobs) => jobs.jobStatus)
  jobStatus!: Jobs

}