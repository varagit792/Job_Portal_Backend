import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { EmployeeType } from './employeeType.entity';
import { TotalExpMonth } from './totalExpMonth.entity';
import { TotalExpYear } from './totalExpYear.entity';
import { Location } from './location.entity';
import { Currency } from './currency.entity';
import { NoticePeriod } from './noticePeriod.entity';
import { Department } from './department.entity';
import { JobSeekerProfileEmploymentSkills } from './jobSeekerProfileEmploymentSkills.entity';
import { KeySkills } from './keySkills.entity';
import { JoiningDateYear } from './joiningDateYear.entity';
import { JoiningDateMonth } from './joiningDateMonth.entity';
import { JobSeekerProfile } from './jobSeekerProfile.entity';

@Entity()
export class JobSeekerProfileEmployment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @OneToMany(() => JobSeekerProfileEmploymentSkills, (jobSeekerProfileEmploymentSkills) => jobSeekerProfileEmploymentSkills.jobSeekerProfileEmployment, { createForeignKeyConstraints: true, cascade: true })
  jobSeekerProfileEmploymentSkills!: JobSeekerProfileEmploymentSkills[]

  // @Column()
  // jobSeekerProfileId!: number

  @ManyToOne(() => JobSeekerProfile, (jobSeekerProfile) => jobSeekerProfile.employments, { onDelete: 'CASCADE' })
  jobSeekerProfile!: JobSeekerProfile


  @Column({ default: true })
  isCurrentEmployment!: boolean

  // @OneToOne(() => EmployeeType)
  // @JoinColumn()
  @Column({ default: null, nullable: true })
  employmentType!: string

  @OneToOne(() => TotalExpYear)
  @JoinColumn()
  totalExpYears!: TotalExpYear

  @OneToOne(() => TotalExpMonth)
  @JoinColumn()
  totalExpMonths!: TotalExpMonth

  @Column()
  companyName!: string

  @Column({ default: null, nullable: true })
  designation!: string

  // @Column()
  // joiningDateYear!: number
  @OneToOne(() => JoiningDateYear)
  @JoinColumn()
  joiningDateYear!: JoiningDateYear

  // @Column()
  // joiningDateMonth!: number
  @OneToOne(() => JoiningDateMonth)
  @JoinColumn()
  joiningDateMonth!: JoiningDateMonth

  @OneToOne(() => Location)
  @JoinColumn()
  location!: Location

  @OneToOne(() => Department)
  @JoinColumn()
  department!: Department

  @Column({ default: null, nullable: true })
  currentSalary!: number

  @OneToOne(() => Currency)
  @JoinColumn()
  currencyType!: Currency

  @Column({ default: null, nullable: true })
  monthlyStipend!: number

  @OneToOne(() => Currency)
  @JoinColumn()
  monthlyStipendCurrencyType!: Currency

  @Column({ default: null, nullable: true, type: 'text' })
  jobProfile!: string;

  @OneToOne(() => NoticePeriod)
  @JoinColumn()
  noticePeriod!: NoticePeriod

  @Column({ default: null, nullable: true })
  workedTillYear!: number

  @Column({ default: null, nullable: true })
  workedTillMonth!: number

}