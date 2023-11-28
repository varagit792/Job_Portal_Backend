import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne } from 'typeorm';
import { Jobs } from './jobs.entity';
import { JobEducation } from './jobEducation.entity';

@Entity()
export class HighestQualification extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  title!: string;

  @Column()
  status!: boolean

  @OneToOne(() => JobEducation, (jobs) => jobs.education)
  education!: JobEducation

}