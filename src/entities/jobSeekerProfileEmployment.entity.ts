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

  // @OneToOne(() => TotalExpYear)
  // @JoinColumn()
  // totalExpYears!: TotalExpYear
  @ManyToOne(() => TotalExpYear)
  @JoinColumn({ name:'totalExpYearsId', referencedColumnName:'id'})
  totalExpYears!: TotalExpYear

  // @OneToOne(() => TotalExpMonth)
  // @JoinColumn()
  // totalExpMonths!: TotalExpMonth
  @ManyToOne(() => TotalExpMonth)
  @JoinColumn({ name:'totalExpMonthsId', referencedColumnName:'id'})
  totalExpMonths!: TotalExpMonth

  @Column()
  companyName!: string

  @Column({ default: null, nullable: true })
  designation!: string

  @Column({ default: null, nullable: true })
  role!: string

  // @Column()
  // joiningDateYear!: number
  @ManyToOne(() => JoiningDateYear)
  @JoinColumn({ name:'joiningDateYearId', referencedColumnName:'id'})
  joiningDateYear!: JoiningDateYear

  // @Column()
  // joiningDateMonth!: number
  // @OneToOne(() => JoiningDateMonth)
  // @JoinColumn()
  // joiningDateMonth!: JoiningDateMonth
  @ManyToOne(() => JoiningDateMonth)
  @JoinColumn({ name:'joiningDateMonthId', referencedColumnName:'id'})
  joiningDateMonth!: JoiningDateMonth

  // @OneToOne(() => Location)
  // @JoinColumn()
  // location!: Location
  @ManyToOne(() => Location)
  @JoinColumn({ name:'locationId', referencedColumnName:'id'})
  location!: Location

  // @OneToOne(() => Department)
  // @JoinColumn()
  // department!: Department
  @ManyToOne(() => Department)
  @JoinColumn({ name:'departmentId', referencedColumnName:'id'})
  department!: Department

  @Column({ default: null, nullable: true })
  currentSalary!: number

  // @OneToOne(() => Currency)
  // @JoinColumn()
  // currencyType!: Currency
  @ManyToOne(() => Currency)
  @JoinColumn({ name:'currencyTypeId', referencedColumnName:'id'})
  currencyType!: Currency

  @Column({ default: null, nullable: true })
  monthlyStipend!: number

  // @OneToOne(() => Currency)
  // @JoinColumn()
  // monthlyStipendCurrencyType!: Currency

  @ManyToOne(() => Currency)
  @JoinColumn({ name:'monthlyStipendCurrencyTypeId', referencedColumnName:'id'})
  monthlyStipendCurrencyType!: Currency

  @Column({ default: null, nullable: true, type: 'text' })
  jobProfile!: string;

  // @OneToOne(() => NoticePeriod)
  // @JoinColumn()
  // noticePeriod!: NoticePeriod

  @ManyToOne(() => NoticePeriod)
  @JoinColumn({ name:'noticePeriodId', referencedColumnName:'id'})
  noticePeriod!: NoticePeriod

  @Column({ default: null, nullable: true })
  workedTillYear!: number

  @Column({ default: null, nullable: true })
  workedTillMonth!: number

  @Column({ default: null, nullable: true })
  workedFromYear!: number

  @Column({ default: null, nullable: true })
  workedFromMonth!: number

}