import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne } from 'typeorm';
import { JobSeekerProfile } from './jobSeekerProfile.entity';
import { CareerProfile } from './careerProfile.entity';
import { CareerProfileJobType } from './careerProfileJobType.entity';
import { Jobs } from './jobs.entity';

@Entity()
export class JobType extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  title!: string;

  @Column()
  status!: boolean

  @OneToOne(() => CareerProfileJobType, (careerProfileJobType) => careerProfileJobType.jobType)
  careerProfileJobType!: CareerProfileJobType

  @OneToOne(() => Jobs, (jobs) => jobs.jobsType)
  jobsType!: Jobs

}