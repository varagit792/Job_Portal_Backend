import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne, OneToMany } from 'typeorm';
import { CareerProfile } from './careerProfile.entity';
import { CareerProfilePreferredLocations } from './careerProfilePreferredLocations.entity';
import { JobSeekerProfileEmployment } from './jobSeekerProfileEmployment.entity';
import { Jobs } from './jobs.entity';

@Entity()
export class Location extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  title!: string;

  @Column()
  status!: boolean

  @OneToOne(() => CareerProfilePreferredLocations, (careerProfilePreferredLocations) => careerProfilePreferredLocations.location)
  careerProfilePreferredLocations!: CareerProfilePreferredLocations

  @OneToMany(type => JobSeekerProfileEmployment, j => j.location)
  jobSeekerProfileEmployment!: JobSeekerProfileEmployment

  @OneToOne(() => Jobs, (jobs) => jobs.jobsLocation)
  jobsLocation!: Jobs

}