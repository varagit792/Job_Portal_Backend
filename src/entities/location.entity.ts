import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne, OneToMany } from 'typeorm';
import { CareerProfile } from './careerProfile.entity';
import { CareerProfilePreferredLocations } from './careerProfilePreferredLocations.entity';
import { JobSeekerProfileEmployment } from './jobSeekerProfileEmployment.entity';
import { Jobs } from './jobs.entity';
import { JobLocation } from './jobLocation.entity';
import { Company } from './company.entity';

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

  @ManyToOne(() => Company, (company) => company.location, { onDelete: 'CASCADE' })
  company!: Company

  @OneToOne(() => JobLocation, (jobs) => jobs.location)
  location!: JobLocation

}