import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Jobs } from './jobs.entity';
import { User } from './user.entity';
import { QuestionnaireAnswer } from './questionnaireAnswer.entity';
import { MultipleChoiceQuestionnaireAnswer } from './multipleChoiceQuestionnaireAnswer.entity';

@Entity()
export class ApplyJobs extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => Jobs, jobs => jobs.jobs, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false, nullable: true
  })
  @JoinColumn({ name: "jobs" })
  jobs!: Jobs

  @OneToMany(() => QuestionnaireAnswer, (questionnaireAnswer) => questionnaireAnswer.questionnaireAnswer, { createForeignKeyConstraints: true, cascade: true })
  questionnaireAnswer!: QuestionnaireAnswer[]

  @OneToMany(() => MultipleChoiceQuestionnaireAnswer, (multipleChoiceQuestionnaireAnswer) => multipleChoiceQuestionnaireAnswer.multipleChoiceQuestionnaireAnswer, { createForeignKeyConstraints: true, cascade: true })
  multipleChoiceQuestionnaireAnswer!: MultipleChoiceQuestionnaireAnswer[]

  @OneToOne(() => User, user => user.user, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false, nullable: true
  })
  @JoinColumn({ name: "applyUser" })
  user!: User
}