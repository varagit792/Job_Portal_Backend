import { Entity, Column, OneToOne, JoinColumn, OneToMany, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';
import { Industry } from './industry.entity';
import { Department } from './department.entity';
import { RoleCategory } from './roleCategory.entity';
import { JobRole } from './jobRole.entity';
import { Currency } from './currency.entity';
import { EmployeeType } from './employeeType.entity';
import { JobSeekerProfile } from './jobSeekerProfile.entity';
import { CareerProfileEmployeeType } from './careerProfileEmployeeType.entity';
import { CareerProfileJobType } from './careerProfileJobType.entity';
import { CareerProfilePreferredLocations } from './careerProfilePreferredLocations.entity';
import { CareerProfilePreferredShift } from './careerProfilePreferredShift.entity';

@Entity()
export class CareerProfile extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id!: number

  @OneToMany(() => CareerProfilePreferredLocations, careerProfilePreferredLocations => careerProfilePreferredLocations.careerProfile, {
    createForeignKeyConstraints: false, onDelete: "CASCADE", cascade: ['insert']
  })
  careerProfilePreferredLocations!: CareerProfilePreferredLocations[]

  @OneToOne(() => Industry, (industry) => industry.careerProfile, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn()
  industry!: Industry

  @OneToOne(() => Department, (department) => department.careerProfile, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn()
  department!: Department

  @OneToOne(() => RoleCategory, (roleCategory) => roleCategory.careerProfile, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn()
  roleCategory!: RoleCategory

  @OneToOne(() => JobRole, (jobRole) => jobRole.careerProfile, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn()
  jobRole!: JobRole

  @OneToMany(() => CareerProfileJobType, (careerProfileJobType) => careerProfileJobType.careerProfile, { createForeignKeyConstraints: false, onDelete: "CASCADE", cascade: ['insert'] })
  careerProfileJobType!: CareerProfileJobType[]

  @OneToMany(() => CareerProfileEmployeeType, (employmentType) => employmentType.careerProfile, { createForeignKeyConstraints: false, onDelete: "CASCADE", cascade: ['insert'] })
  careerProfileEmployeeType!: CareerProfileEmployeeType[]

  @OneToMany(() => CareerProfilePreferredShift, (careerProfilePreferredShift) => careerProfilePreferredShift.careerProfile, { createForeignKeyConstraints: false, onDelete: "CASCADE", cascade: ['insert'] })
  careerProfilePreferredShift!: CareerProfilePreferredShift[]

  @OneToOne(() => Currency, { cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false })
  @JoinColumn()
  currency!: Currency | null

  @Column({ default: null })
  expectedSalary!: string

  @OneToOne(() => JobSeekerProfile, (jobSeekerProfile) => jobSeekerProfile.careerProfile)
  @JoinColumn()
  jobSeekerProfile!: JobSeekerProfile

}
