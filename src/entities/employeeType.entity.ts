import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne } from 'typeorm';
import { CareerProfileEmployeeType } from './careerProfileEmployeeType.entity';
import { Jobs } from './jobs.entity';

@Entity()
export class EmployeeType extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  title!: string;

  @Column()
  status!: boolean

  @OneToOne(() => CareerProfileEmployeeType, (careerProfileEmployeeType) => careerProfileEmployeeType.employeeType)
  careerProfileEmployeeType!: CareerProfileEmployeeType

  @OneToOne(() => Jobs, (jobs) => jobs.employmentType)
  employmentType!: Jobs

}