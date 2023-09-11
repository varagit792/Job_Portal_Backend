import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { CareerProfile } from './careerProfile.entity';
import { EmployeeType } from './employeeType.entity';

@Entity()
export class CareerProfileEmployeeType extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @ManyToOne(() => CareerProfile, (careerProfile) => careerProfile.careerProfileEmployeeType, { nullable: false, onDelete: "CASCADE" })
  careerProfile!: CareerProfile

  @OneToOne(() => EmployeeType, (employeeType) => employeeType.careerProfileEmployeeType, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "employeeTypeId" })
  employeeType!: EmployeeType

}