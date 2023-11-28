import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne } from 'typeorm';
import { JobSeekerProfile } from './jobSeekerProfile.entity';
import { JobsKeySkills } from './jobsKeySkills.entity';
import { JobSeekerProfileKeySkills } from './jobSeekerProfileKeySkills.entity';

@Entity()
export class KeySkills extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  title!: string;

  @OneToOne(() => JobsKeySkills, (jobs) => jobs.keySkills)
  keySkills!: JobsKeySkills

  @OneToOne(() => JobSeekerProfileKeySkills, (jobs) => jobs.profileKeySkills)
  profileKeySkills!: JobSeekerProfileKeySkills

  @Column()
  status!: boolean


}