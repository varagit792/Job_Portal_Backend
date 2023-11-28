import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne } from 'typeorm';
import { CareerProfile } from './careerProfile.entity';
import { Jobs } from './jobs.entity';
import { JobCandidateIndustry } from './jobCandidateIndustry.entity';
import { Companies } from './companies.entity';

@Entity()
export class Industry extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  title!: string;

  @Column()
  status!: boolean

  @OneToOne(() => CareerProfile, (careerProfile) => careerProfile.industry)
  careerProfile!: CareerProfile

  @OneToOne(() => JobCandidateIndustry, (jobs) => jobs.candidateIndustry)
  candidateIndustry!: JobCandidateIndustry

  @ManyToOne(() => Companies, companies => companies.industry)
  companies!: Companies
}