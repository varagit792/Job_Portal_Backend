import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, OneToOne } from 'typeorm';
import { JobSeekerProfileEmployment } from './jobSeekerProfileEmployment.entity';
import { Jobs } from './jobs.entity';

@Entity()
export class TotalExpYear extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  title!: string;

  @Column()
  status!: boolean

  @OneToMany(type => JobSeekerProfileEmployment, j => j.totalExpYears)
  jobSeekerProfileEmployment!: JobSeekerProfileEmployment

  @OneToOne(() => Jobs, (jobs) => jobs.totalExpYearStart)
  totalExpYearStart!: Jobs

  @OneToOne(() => Jobs, (jobs) => jobs.totalExpYearEnd)
  totalExpYearEnd!: Jobs

}
