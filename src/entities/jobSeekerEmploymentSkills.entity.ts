import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany } from 'typeorm';
import { JobSeekerProfile } from './jobSeekerProfile.entity';

@Entity()
export class JobSeekerProfileEmploymentSkills extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  job_seeker_profile_id!: number

  @Column()
  job_seeker_employment_id!: number

  @Column()
  key_skills_id!: number
}