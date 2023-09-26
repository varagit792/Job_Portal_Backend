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

  @Column()
  payScaleLowerRange!: number;

  @Column()
  jobsOpening!: number;

  @Column()
  userType!: string;

  @Column()
  payScaleUpperRange!: number;

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

  @OneToOne(() => Location, location => location.jobsLocation, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "location" })
  jobsLocation!: Location

  @Column({ type: "text" })
  jobDescription: string | undefined;

  @OneToOne(() => JobTitle, jobRole => jobRole.jobsRole, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "role" })
  jobsRole!: JobTitle

  @OneToOne(() => Industry, industryType => industryType.industryType, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "industryType" })
  industryType!: Industry

  @OneToOne(() => Department, department => department.department, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "department" })
  department!: Department

  @OneToOne(() => EmployeeType, employeeType => employeeType.employeeType, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "employeeType" })
  employeeType!: EmployeeType

  @OneToOne(() => JobType, jobType => jobType.jobType, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "jobType" })
  jobType!: JobType

  @OneToOne(() => RoleCategory, roleCategory => roleCategory.roleCategory, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "roleCategory" })
  roleCategory!: RoleCategory

  @OneToOne(() => HighestQualification, education => education.education, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "education" })
  education!: HighestQualification

  @CreateDateColumn()
  createdAt: Date | undefined;

  @UpdateDateColumn()
  updatedAt: Date | undefined;

  @ManyToOne(() => Jobs, jobs => jobs.user, { nullable: true, onDelete: "CASCADE" })
  user!: Jobs

  @Column()
  status!: boolean

}