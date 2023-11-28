import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { CareerProfile } from './careerProfile.entity';
import { JobType } from './jobType.entity';

@Entity()
export class CareerProfileJobType extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @ManyToOne(() => CareerProfile, (careerProfile) => careerProfile.careerProfileJobType, { nullable: false, onDelete: "CASCADE" })
  careerProfile!: CareerProfile

  @OneToOne(() => JobType, (jobType) => jobType.careerProfileJobType, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "jobTypeId" })
  jobType!: JobType

}