import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, OneToMany } from 'typeorm';
import { CareerProfile } from './careerProfile.entity';
import { JobSeekerProfileEmployment } from './jobSeekerProfileEmployment.entity';
import { Jobs } from './jobs.entity';

@Entity()
export class Currency extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  title!: string;

  @Column()
  status!: boolean

  @OneToOne(() => CareerProfile, (careerProfile) => careerProfile.currency)
  careerProfile!: CareerProfile

  @OneToOne(() => Jobs, (careerProfile) => careerProfile.currency)
  jobs!: Jobs

  @OneToMany(type => JobSeekerProfileEmployment, j => { j.currencyType, j.monthlyStipendCurrencyType })
  jobSeekerProfileEmployment!: JobSeekerProfileEmployment

}