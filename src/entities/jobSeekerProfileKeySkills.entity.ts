import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { JobSeekerProfile } from './jobSeekerProfile.entity';
import { JobSeekerProfileEmployment } from './jobSeekerProfileEmployment.entity';
import { KeySkills } from './keySkills.entity';

@Entity()
export class JobSeekerProfileKeySkills extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @ManyToOne(() => JobSeekerProfile, (jobSeekerProfile) => jobSeekerProfile.keySkills, { onDelete: 'CASCADE' })
  jobSeekerProfileKeySkills!: JobSeekerProfile

  @ManyToOne(() => KeySkills,{onDelete:'SET NULL',onUpdate:'CASCADE'})
  @JoinColumn()
  profileKeySkills!: KeySkills

}