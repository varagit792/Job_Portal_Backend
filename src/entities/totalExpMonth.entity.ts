import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, OneToMany } from 'typeorm';
import { JobSeekerProfile } from './jobSeekerProfile.entity';
import { JobSeekerProfileEmployment } from './jobSeekerProfileEmployment.entity';

@Entity()
export class TotalExpMonth extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  title!: string;

  @Column()
  status!: boolean
  // jobSeekerProfile: any;

  @OneToMany(type => JobSeekerProfile, j => j.totalExpMonth)
  jobSeekerProfile!:JobSeekerProfile

  @OneToMany(type => JobSeekerProfileEmployment, je => je.totalExpMonths)
  jobSeekerProfileEmployment!: JobSeekerProfileEmployment
}
