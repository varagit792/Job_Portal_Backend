import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne, OneToMany } from 'typeorm';
import { JobSeekerProfile } from './jobSeekerProfile.entity';
import { CareerProfile } from './careerProfile.entity';
import { JobSeekerProfileEmployment } from './jobSeekerProfileEmployment.entity';
import { Jobs } from './jobs.entity';
import { Companies } from './companies.entity';

@Entity()
export class Department extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  title!: string;

  @Column()
  status!: boolean
  jobSeekerProfile: any;


  @OneToOne(() => CareerProfile, (careerProfile) => careerProfile.department)
  careerProfile!: CareerProfile

  @OneToMany(type => JobSeekerProfileEmployment, j => j.department)
  jobSeekerProfileEmployment!: JobSeekerProfileEmployment

  @OneToOne(() => Jobs, jobs => jobs.department)
  department!: Jobs

  @ManyToOne(() => Companies, companies => companies.department)
  companies!: Companies

}