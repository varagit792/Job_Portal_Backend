import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Company } from './company.entity';
import { TotalExpYear } from './totalExpYear.entity';
import { Recurrence } from './recurrence.entity';
import { NumberSystem } from './numberSystem.entity';
import { KeySkills } from './keySkills.entity';
import { Location } from './location.entity';
import { JobTitle } from './jobTitle.entity';
import { Industry } from './industry.entity';
import { Department } from './department.entity';
import { EmployeeType } from './employeeType.entity';
import { JobType } from './jobType.entity';
import { RoleCategory } from './roleCategory.entity';
import { HighestQualification } from './highestQualification.entity';
import { JobsKeySkills } from './jobsKeySkills.entity';
import { SalaryRange } from './salaryRange.entity';
import { Currency } from './currency.entity';
import { WorkMode } from './workMode.entity';
import { JobLocation } from './jobLocation.entity';
import { JobLocality } from './jobLocality.entity';
import { JobEducation } from './jobEducation.entity';
import { JobCandidateIndustry } from './jobCandidateIndustry.entity';
import { JobRole } from './jobRole.entity';

@Entity()
export class Jobs extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id!: number

  @Column()
  title!: string;

  @OneToOne(() => Company, (company) => company.company, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "company" })
  company!: Company

  @OneToOne(() => TotalExpYear, (totalExpYear) => totalExpYear.totalExpYearStart, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "experienceStartRange" })
  totalExpYearStart!: TotalExpYear

  @OneToOne(() => TotalExpYear, (totalExpYearEnd) => totalExpYearEnd.totalExpYearEnd, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "experienceEndRange" })
  totalExpYearEnd!: TotalExpYear

  @OneToOne(() => SalaryRange, (salaryRange) => salaryRange.payScaleLowerRange, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "payScaleLowerRange" })
  payScaleLowerRange!: SalaryRange


  @Column()
  jobsOpening!: number;

  @Column()
  userType!: string;

  @Column({ type: "text" })
  companyAddress!: string;

  @Column({ type: "text" })
  aboutCompany!: string;

  @Column({ type: "text" })
  companyWebsite!: string;

  @Column({ type: "text" })
  notificationEmailAddress1!: string;

  @Column({ type: "text" })
  notificationEmailAddress2!: string;

  @Column()
  notifyMeAbout!: boolean;

  @Column()
  premiumBTech!: boolean;

  @Column()
  premiumMBAAll!: boolean;

  @Column()
  candidateRelocate!: boolean;

  @Column()
  diversityHiring!: boolean;

  @Column()
  hideSalaryDetails!: boolean;

  @Column()
  videoProfile!: string;

  @Column()
  includeWalkInDetails!: boolean;

  @OneToOne(() => SalaryRange, (salaryRange) => salaryRange.payScaleUpperRange, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "payScaleUpperRange" })
  payScaleUpperRange!: SalaryRange



  @OneToOne(() => NumberSystem, (numberSystem) => numberSystem.numberSystem, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "numberSystem" })
  numberSystem!: NumberSystem

  @OneToOne(() => Recurrence, (recurrence) => recurrence.recurrence, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "recurrence" })
  recurrence!: Recurrence

  @OneToMany(() => JobsKeySkills, (keySkills) => keySkills.jobsKeySkills, { createForeignKeyConstraints: true, cascade: true })
  jobsKeySkills!: JobsKeySkills[]

  @OneToMany(() => JobLocation, (keySkills) => keySkills.jobsLocation, { createForeignKeyConstraints: true, cascade: true })
  jobsLocation!: JobLocation[]

  @OneToMany(() => JobLocality, (locality) => locality.jobLocality, { createForeignKeyConstraints: true, cascade: true })
  jobLocality!: JobLocality[]

  @Column({ type: "text" })
  jobDescription: string | undefined;

  @OneToOne(() => JobRole, jobRole => jobRole.jobRole, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "jobsRole" })
  jobsRole!: JobRole

  @OneToOne(() => Industry, industryType => industryType.companyIndustry, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "companyIndustry" })
  companyIndustry!: Industry

  @OneToMany(() => JobCandidateIndustry, (jobCandidateIndustry) => jobCandidateIndustry.jobCandidateIndustry, { createForeignKeyConstraints: true, cascade: true })
  jobCandidateIndustry!: JobCandidateIndustry[]



  @OneToOne(() => Department, department => department.department, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "department" })
  department!: Department

  @OneToOne(() => JobType, jobType => jobType.jobsType, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "jobsType" })
  jobsType!: JobType

  @OneToOne(() => RoleCategory, roleCategory => roleCategory.roleCategory, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "roleCategory" })
  roleCategory!: RoleCategory

  @OneToMany(() => JobEducation, (education) => education.jobEducation, { createForeignKeyConstraints: true, cascade: true })
  jobEducation!: JobEducation[]



  @OneToOne(() => Currency, currency => currency.jobs, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "currency" })
  currency!: Currency

  @OneToOne(() => WorkMode, workMode => workMode.jobs, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "workMode" })
  workMode!: Currency

  @CreateDateColumn()
  createdAt: Date | undefined;

  @UpdateDateColumn()
  updatedAt: Date | undefined;

  @ManyToOne(() => Jobs, jobs => jobs.user, { nullable: true, onDelete: "CASCADE" })
  user!: Jobs

  @Column()
  status!: boolean

}