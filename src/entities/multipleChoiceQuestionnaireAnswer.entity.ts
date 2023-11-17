import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Questionnaire } from './questionnaire.entity';
import { MultipleChoiceQuestionnaire } from './multipleChoiceQuestionnaire.entity';
import { ApplyJobs } from './applyJobs.entity';

@Entity()
export class MultipleChoiceQuestionnaireAnswer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "text" })
  answer: string | undefined;

  @OneToOne(() => MultipleChoiceQuestionnaire, multipleChoiceQuestionnaire => multipleChoiceQuestionnaire.multipleChoiceQuestionnaire, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false, nullable: true
  })
  @JoinColumn({ name: "multipleChoiceQuestionnaire" })
  multipleChoiceQuestionnaire!: MultipleChoiceQuestionnaire

  @ManyToOne(() => ApplyJobs, multipleChoiceQuestionnaireAnswer => multipleChoiceQuestionnaireAnswer.multipleChoiceQuestionnaireAnswer, { nullable: true, onDelete: "CASCADE" })
  multipleChoiceQuestionnaireAnswer!: ApplyJobs

}