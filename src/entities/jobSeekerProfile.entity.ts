import { Entity, Column, OneToOne, JoinColumn, OneToMany, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
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

@Entity()
export class JobSeekerProfile extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
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

  @OneToOne(() => TotalExpYear)
  @JoinColumn()
  totalExpYear!: TotalExpYear

  @OneToOne(() => TotalExpMonth)
  @JoinColumn()
  totalExpMonth!: TotalExpMonth

  @Column({ default: null })
  currentSalary!: string

  @OneToOne(() => Currency)
  @JoinColumn()
  currentCurrency!: Currency

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

  @OneToOne(() => NoticePeriod)
  @JoinColumn()
  noticePeriod!: NoticePeriod

  @OneToMany(() => Education, (education) => education.jobSeekerProfile, { createForeignKeyConstraints: true, cascade: true })
  educations!: Education[]

  @OneToOne(() => User)
  @JoinColumn()
  user!: User

  // @Column({ default: Date() })
  // updateDate!:Date
  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updatedDate!: Date
}
