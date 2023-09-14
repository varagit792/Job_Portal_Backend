import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { JobSeekerProfileEmployment } from './jobSeekerProfileEmployment.entity';

@Entity()
export class JoiningDateMonth extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  title!: string;

  @Column()
  status!: boolean

  @OneToMany(type => JobSeekerProfileEmployment, j => j.joiningDateMonth)
  jobSeekerProfileEmployment!:JobSeekerProfileEmployment

}
