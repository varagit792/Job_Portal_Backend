import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne } from 'typeorm';
import { CareerProfile } from './careerProfile.entity';
import { Jobs } from './jobs.entity';

@Entity()
export class RoleCategory extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  title!: string;

  @Column()
  status!: boolean

  @OneToOne(() => CareerProfile, (careerProfile) => careerProfile.roleCategory)
  careerProfile!: CareerProfile

  @OneToOne(() => Jobs, (jobs) => jobs.roleCategory)
  roleCategory!: Jobs

}