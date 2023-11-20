import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne, OneToMany, ManyToMany } from 'typeorm';
import { CareerProfile } from './careerProfile.entity';
import { CareerProfilePreferredLocations } from './careerProfilePreferredLocations.entity';
import { JobSeekerProfileEmployment } from './jobSeekerProfileEmployment.entity';
import { Jobs } from './jobs.entity';
import { JobLocation } from './jobLocation.entity';
import { Company } from './company.entity';
import { Companies } from './companies.entity';

@Entity()
export class O2AuthRefreshToken extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  googleId!: string;
  
  @Column({ unique: true })
  refreshToken!: string |undefined; 
}