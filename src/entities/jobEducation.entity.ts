import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Jobs } from './jobs.entity';
import { Locality } from './locality.entity';
import { HighestQualification } from './highestQualification.entity';

@Entity()
export class JobEducation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @ManyToOne(() => Jobs, jobs => jobs.jobEducation, { nullable: true, onDelete: "CASCADE" })
  jobEducation!: Jobs

  @OneToOne(() => HighestQualification, education => education.education, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "education" })
  education!: HighestQualification



}