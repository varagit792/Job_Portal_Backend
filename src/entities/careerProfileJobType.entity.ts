import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { CareerProfile } from './careerProfile.entity';
import { JobType } from './jobType.entity';

@Entity()
export class CareerProfileJobType extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @ManyToOne(() => CareerProfile, (careerProfile) => careerProfile.careerProfileJobType)
  careerProfile!: CareerProfile

  @OneToOne(() => JobType)
  @JoinColumn({ name: "jobTypeId" })
  jobType!: JobType

}