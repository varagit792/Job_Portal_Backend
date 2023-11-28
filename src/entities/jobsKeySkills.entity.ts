import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Jobs } from './jobs.entity';
import { KeySkills } from './keySkills.entity';

@Entity()
export class JobsKeySkills extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @ManyToOne(() => Jobs, jobs => jobs.jobsKeySkills, { nullable: true, onDelete: "CASCADE" })
  jobsKeySkills!: Jobs

  @OneToOne(() => KeySkills, (keySkills) => keySkills.keySkills, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "keySkillsId" })
  keySkills!: KeySkills

  @Column()
  preferred!: boolean;

}