import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Jobs } from './jobs.entity';
import { User } from './user.entity';

@Entity()
export class SaveJob extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => Jobs, jobs => jobs.jobs, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false, nullable: true
  })
  @JoinColumn({ name: "jobs" })
  jobs!: Jobs

  @OneToOne(() => User, user => user.user, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false, nullable: true
  })
  @JoinColumn({ name: "applyUser" })
  user!: User
}