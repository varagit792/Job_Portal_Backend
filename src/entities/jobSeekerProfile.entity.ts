import { Entity, Column, OneToOne, JoinColumn, OneToMany, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from 'typeorm';
import { NoticePeriod } from './noticePeriod.entity';
import { Location } from './location.entity';
import { Education } from './education.entity';
import { Industry } from './industry.entity';
import { User } from './user.entity';
import { Department } from './department.entity';
import { RoleCategory } from './roleCategory.entity';
import { JobRole } from './jobRole.entity';
import { Currency } from './currency.entity';
import { TotalExpYear } from './totalExpYear.entity';
import { TotalExpMonth } from './totalExpMonth.entity';
import { PersonalDetails } from './personalDetails.entity';
import { JobSeekerProfileEmployment } from './jobSeekerProfileEmployment.entity';
import { CareerProfile } from './careerProfile.entity';

@Entity()
export class JobSeekerProfile extends BaseEntity {
  @PrimaryColumn()
  id!: number

  @Column({ default: 'null' })
  jobSeekerType!: string

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

  @OneToOne(() => Location, { nullable: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' })
  @JoinColumn()
  currentLocation!: Location | null

  @OneToOne(() => TotalExpYear, { nullable: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' })
  @JoinColumn()
  totalExpYear!: TotalExpYear | null

  @OneToOne(() => TotalExpMonth, { nullable: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' })
  @JoinColumn()
  totalExpMonth!: TotalExpMonth | null

  @Column({ default: null })
  currentSalary!: string

  @OneToOne(() => Currency, { nullable: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' })
  @JoinColumn()
  currentCurrency!: Currency | null

  @Column({ default: 'India' })
  currentCountry!: string

  // @OneToMany(() => Location, (location) => location.jobSeekerProfile, { createForeignKeyConstraints: true, cascade: true })
  // preferredLocations!: Location[]

  //@OneToMany(() => KeySkills, (keySkills) => keySkills.jobSeekerProfile, { createForeignKeyConstraints: true, cascade: true })
  @Column({ default: null, nullable: true, type: 'text' })
  keySkills!: string

  @OneToOne(() => Industry)
  @JoinColumn()
  industry!: Industry

  @OneToOne(() => NoticePeriod, { nullable: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' })
  @JoinColumn()
  noticePeriod!: NoticePeriod | null

  @OneToMany(() => Education, (education) => education.jobSeekerProfile, { createForeignKeyConstraints: true, cascade: true })
  educations!: Education[]

  @OneToMany(() => JobSeekerProfileEmployment, (employment) => employment.jobSeekerProfile, { createForeignKeyConstraints: true, cascade: true })
  employments!: JobSeekerProfileEmployment[]

  @OneToOne(() => PersonalDetails, personalDetails => personalDetails.jobSeekerProfile)
  personalDetails: PersonalDetails | undefined;

  @OneToOne(() => User)
  @JoinColumn()
  user!: User

  @OneToOne(() => CareerProfile, (careerProfile) => careerProfile.jobSeekerProfile)
  careerProfile!: CareerProfile

  @UpdateDateColumn({ type: "timestamp", default: () => null, onUpdate: "CURRENT_TIMESTAMP(6)", nullable: true })
  profileLastUpdated!: Date
  @UpdateDateColumn({ type: 'timestamp', default: () => null, onUpdate: "CURRENT_TIMESTAMP(6)", nullable: true })
  resumeLastUpdated!: Date
}
