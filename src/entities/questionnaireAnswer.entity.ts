import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Questionnaire } from './questionnaire.entity';
import { ApplyJobs } from './applyJobs.entity';

@Entity()
export class QuestionnaireAnswer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "text" })
  answer: string | undefined;

  @OneToOne(() => Questionnaire, questionnaire => questionnaire.questionnaire, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false, nullable: true
  })
  @JoinColumn({ name: "questionnaire" })
  questionnaire!: Questionnaire

  @ManyToOne(() => ApplyJobs, questionnaireAnswer => questionnaireAnswer.questionnaireAnswer, { nullable: true, onDelete: "CASCADE" })
  questionnaireAnswer!: ApplyJobs
}