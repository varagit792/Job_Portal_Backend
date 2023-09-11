import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne } from 'typeorm';
import { JobSeekerProfile } from './jobSeekerProfile.entity';
import { CareerProfile } from './careerProfile.entity';

@Entity()
export class Department extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  title!: string;

  @Column()
  status!: boolean
  jobSeekerProfile: any;


  @OneToOne(() => CareerProfile, (careerProfile) => careerProfile.department)
  careerProfile!: CareerProfile

}