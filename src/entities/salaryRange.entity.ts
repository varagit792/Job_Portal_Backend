import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne } from 'typeorm';
import { Jobs } from './jobs.entity';

@Entity()
export class SalaryRange extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  title!: string;

  @Column()
  status!: boolean

  @OneToOne(() => Jobs, (jobs) => jobs.payScaleLowerRange)
  payScaleLowerRange!: Jobs

  @OneToOne(() => Jobs, (jobs) => jobs.payScaleUpperRange)
  payScaleUpperRange!: Jobs

}