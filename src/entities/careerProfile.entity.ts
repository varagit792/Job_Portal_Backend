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

  @OneToOne(() => Industry, { onDelete: "CASCADE", onUpdate: "CASCADE" })
  @JoinColumn()
  industry!: Industry

  @OneToOne(() => Department, { onDelete: "CASCADE", onUpdate: "CASCADE" })
  @JoinColumn()
  department!: Department

  @OneToOne(() => RoleCategory, { onDelete: "CASCADE", onUpdate: "CASCADE" })
  @JoinColumn()
  roleCategory!: RoleCategory

  @OneToOne(() => JobRole, { onDelete: "CASCADE", onUpdate: "CASCADE" })
  @JoinColumn()
  jobRole!: JobRole

  @OneToMany(() => CareerProfileJobType, (careerProfileJobType) => careerProfileJobType.careerProfile, { createForeignKeyConstraints: false, onDelete: "CASCADE", cascade: ['insert'] })
  careerProfileJobType!: CareerProfileJobType[]

  @OneToMany(() => CareerProfileEmployeeType, (employmentType) => employmentType.careerProfile, { createForeignKeyConstraints: false, onDelete: "CASCADE", cascade: ['insert'] })
  careerProfileEmployeeType!: CareerProfileEmployeeType[]

  @OneToMany(() => CareerProfilePreferredShift, (careerProfilePreferredShift) => careerProfilePreferredShift.careerProfile, { createForeignKeyConstraints: false, onDelete: "CASCADE", cascade: ['insert'] })
  careerProfilePreferredShift!: CareerProfilePreferredShift[]

  @OneToOne(() => Currency, { onDelete: "CASCADE", onUpdate: "CASCADE" })
  @JoinColumn()
  currency!: Currency

  @Column({ default: null })
  expectedSalary!: string

  @OneToOne(() => JobSeekerProfile)
  @JoinColumn()
  jobSeekerProfile!: JobSeekerProfile

}
