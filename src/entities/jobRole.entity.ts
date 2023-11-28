import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne } from 'typeorm';
import { CareerProfile } from './careerProfile.entity';
import { Jobs } from './jobs.entity';

@Entity()
export class JobRole extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  title!: string;

  @Column()
  status!: boolean

  @OneToOne(() => CareerProfile, (careerProfile) => careerProfile.jobRole)
  careerProfile!: CareerProfile

  @OneToOne(() => Jobs, (jobs) => jobs.jobsRole)
  jobRole!: Jobs
}