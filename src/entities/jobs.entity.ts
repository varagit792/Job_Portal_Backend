import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinTable } from 'typeorm';
import { Companies } from './companies.entity';
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
import { CompanyType } from './companyType.entity';
import { JobStatus } from './jobStatus.entity';
import { JobExpiry } from './jobExpiry.entity';
import { Questionnaire } from './questionnaire.entity';
import { ApplyJobs } from './applyJobs.entity';

@Entity()
export class Jobs extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id!: number

  @Column()
  title!: string;

  // @OneToOne(() => Companies, (company) => company.company, {
  //   cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false, nullable: true
  // })
  // @JoinColumn({ name: "company" })
  // company!: Companies

  @ManyToOne(() => Companies, companies => companies.jobs, { nullable: true, onDelete: "CASCADE" })
  @JoinTable()
  company!: Companies

  @OneToOne(() => TotalExpYear, (totalExpYear) => totalExpYear.totalExpYearStart, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false, nullable: true
  })
  @JoinColumn({ name: "totalExpYearStart" })
  totalExpYearStart!: TotalExpYear

  @OneToOne(() => TotalExpYear, (totalExpYearEnd) => totalExpYearEnd.totalExpYearEnd, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false, nullable: true
  })
  @JoinColumn({ name: "totalExpYearEnd" })
  totalExpYearEnd!: TotalExpYear

  @OneToOne(() => SalaryRange, (salaryRange) => salaryRange.payScaleLowerRange, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false, nullable: true
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

  @Column({ default: false })
  isDraft!: boolean;

  @Column()
  candidateRelocate!: boolean;

  @Column()
  diversityHiring!: boolean;

  @Column()
  hideCompanyRating!: boolean;

  @Column()
  hideSalaryDetails!: boolean;

  @Column()
  videoProfile!: string;

  @Column()
  includeWalkInDetails!: boolean;

  @OneToOne(() => SalaryRange, (salaryRange) => salaryRange.payScaleUpperRange, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false, nullable: true
  })
  @JoinColumn({ name: "payScaleUpperRange" })
  payScaleUpperRange!: SalaryRange



  @OneToOne(() => NumberSystem, (numberSystem) => numberSystem.numberSystem, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false, nullable: true
  })
  @JoinColumn({ name: "numberSystem" })
  numberSystem!: NumberSystem


  @OneToOne(() => EmployeeType, (employmentType) => employmentType.employmentType, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false, nullable: true
  })
  @JoinColumn({ name: "numberSystem" })
  employmentType!: EmployeeType

  @OneToOne(() => Recurrence, (recurrence) => recurrence.recurrence, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false, nullable: true
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

  @Column({ type: "text" })
  keyResponsibility: string | undefined;

  @OneToOne(() => JobRole, jobRole => jobRole.jobRole, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false, nullable: true
  })
  @JoinColumn({ name: "jobsRole" })
  jobsRole!: JobRole

  @OneToOne(() => CompanyType, industryType => industryType.companyType, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false, nullable: true
  })
  @JoinColumn({ name: "companyType" })
  companyType!: CompanyType

  @OneToMany(() => JobCandidateIndustry, (jobCandidateIndustry) => jobCandidateIndustry.jobCandidateIndustry, { createForeignKeyConstraints: true, cascade: true })
  jobCandidateIndustry!: JobCandidateIndustry[]

  @OneToOne(() => Department, department => department.department, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false, nullable: true
  })
  @JoinColumn({ name: "department" })
  department!: Department

  @OneToOne(() => JobType, jobType => jobType.jobsType, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false, nullable: true
  })
  @JoinColumn({ name: "jobsType" })
  jobsType!: JobType

  @OneToOne(() => RoleCategory, roleCategory => roleCategory.roleCategory, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false, nullable: true
  })
  @JoinColumn({ name: "roleCategory" })
  roleCategory!: RoleCategory

  @OneToMany(() => JobEducation, (education) => education.jobEducation, { createForeignKeyConstraints: true, cascade: true })
  jobEducation!: JobEducation[]

  @OneToMany(() => Questionnaire, (questionnaire) => questionnaire.questionnaire, { createForeignKeyConstraints: true, cascade: true })
  questionnaire!: Questionnaire[]

  @OneToOne(() => Currency, currency => currency.jobs, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false, nullable: true
  })
  @JoinColumn({ name: "currency" })
  currency!: Currency

  @OneToOne(() => WorkMode, workMode => workMode.jobs, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false, nullable: true
  })
  @JoinColumn({ name: "workMode" })
  workMode!: Currency

  @CreateDateColumn()
  createdAt: Date | undefined;

  @UpdateDateColumn()
  updatedAt: Date | undefined;

  @OneToOne(() => ApplyJobs, (applyJobs) => applyJobs.jobs)
  jobs!: Jobs

  @OneToOne(() => JobStatus, jobStatus => jobStatus.jobStatus, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false, nullable: true
  })
  @JoinColumn({ name: "status" })
  jobStatus!: JobStatus

  @OneToOne(() => JobExpiry, jobExpiry => jobExpiry.jobExpiry, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false, nullable: true
  })
  @JoinColumn({ name: "jobExpiry" })
  jobExpiry!: JobExpiry

}