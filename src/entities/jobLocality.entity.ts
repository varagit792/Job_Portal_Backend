import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Jobs } from './jobs.entity';
import { Locality } from './locality.entity';

@Entity()
export class JobLocality extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @ManyToOne(() => Jobs, jobs => jobs.jobLocality, { nullable: true, onDelete: "CASCADE" })
  jobLocality!: Jobs

  @OneToOne(() => Locality, (location) => location.locality, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "locality" })
  locality!: Locality



}