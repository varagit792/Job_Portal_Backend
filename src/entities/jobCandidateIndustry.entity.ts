import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Jobs } from './jobs.entity';
import { Location } from './location.entity';
import { Industry } from './industry.entity';

@Entity()
export class JobCandidateIndustry extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @ManyToOne(() => Jobs, jobs => jobs.jobCandidateIndustry, { nullable: true, onDelete: "CASCADE" })
  jobCandidateIndustry!: Jobs

  @OneToOne(() => Industry, industry => industry.candidateIndustry, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "candidateIndustry" })
  candidateIndustry!: Industry



}