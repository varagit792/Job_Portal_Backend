import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne } from 'typeorm';
import { Jobs } from './jobs.entity';

@Entity()
export class JobExpiry extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  title!: string;

  @Column({ unique: true })
  numberOfDays!: number;

  @Column()
  status!: boolean

  @OneToOne(() => Jobs, (jobs) => jobs.jobExpiry)
  jobExpiry!: Jobs

}