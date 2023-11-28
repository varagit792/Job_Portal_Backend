import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';
import { JobSeekerProfile } from './jobSeekerProfile.entity';

@Entity()
export class Education extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  // @Column()
  // jobSeekerId!: string;

  @ManyToOne(() => JobSeekerProfile, (jobSeekerProfile) => jobSeekerProfile.educations, { onDelete: 'CASCADE' })
  jobSeekerProfile!: JobSeekerProfile

  // @ManyToOne(() => JobSeekerProfile, (jobSeekerProfile) => jobSeekerProfile.educations, { nullable: false })
  // @JoinColumn({ name: 'jobSeekerProfile' })
  // jobSeekerProfile!: JobSeekerProfile

  @Column()
  education!: string

  // @Column()
  // course!: string

  @Column({ default: null, nullable: true })
  board!: string

  @Column({ default: null, nullable: true })
  specialization!: string

  @Column()
  institute!: string

  @Column()
  courseType!: string

  //@Column()
  //startingYear!: string

  @Column()
  passingYear!: string

  @Column()
  percentage!: string
  //@Column()
  //resumeHeadline!: string

  //@Column()
  //preferredWorkLocations!: string

  //@Column()
  //preferredSalaryCurrency!: string

  //@Column()
  //preferredSalaryAmount!: string

  //@Column()
  //gender!: string
}


