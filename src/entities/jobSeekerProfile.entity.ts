import { Entity, Column, OneToOne, JoinColumn, OneToMany, BaseEntity, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { NoticePeriod } from './noticePeriod.entity';
import { Location } from './location.entity';
import { Education } from './education.entity';
import { Industry } from './industry.entity';
import { User } from './user.entity';

@Entity()
export class JobSeekerProfile extends BaseEntity {
  @PrimaryColumn()
  id!: number

  @Column({ default: null })
  workStatus!: boolean

  @Column({ default: null, nullable: true })
  resumePath!: string

  @Column({ default: null, nullable: true })
  resumeFile!: string

  @Column({ default: null, nullable: true })
  profilePicturePath!: string


  @Column({ default: null, nullable: true })
  profilePictureFile!: string

  @Column({ default: null })
  noOfSections!: number

  @Column({ default: null })
  completedSections!: number

  @Column({ default: null, nullable: true, type: 'text' })
  profileSummary!: string

  // @Column({ default: null })
  // currentLocation!: string
  @Column({ default: null, type: 'text' })
  resumeHeadline!: string

  @OneToOne(() => Location)
  @JoinColumn()
  currentLocation!: Location

  //@OneToMany(() => KeySkills, (keySkills) => keySkills.jobSeekerProfile, { createForeignKeyConstraints: true, cascade: true })
  @Column({ default: null, nullable: true, type: 'text' })
  keySkills!: string

  @OneToOne(() => Industry)
  @JoinColumn()
  industry!: Industry

  @OneToOne(() => NoticePeriod)
  @JoinColumn()
  noticePeriod!: NoticePeriod

  @OneToMany(() => Education, (education) => education.jobSeekerProfile, { createForeignKeyConstraints: true, cascade: true })
  educations!: Education[]

  @OneToOne(() => User)
  @JoinColumn()
  user!: User

}
