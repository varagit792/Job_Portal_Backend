import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { SingleChoiceQuestionnaire } from './singleChoiceQuestionnaire.entity';
import { MultipleChoiceQuestionnaire } from './multipleChoiceQuestionnaire.entity';
import { Jobs } from './jobs.entity';
import { QuestionnaireAnswer } from './questionnaireAnswer.entity';

@Entity()
export class Questionnaire extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "text" })
  question!: string;

  @Column({ type: "text" })
  questionType!: string;

  @Column()
  characterLimit!: string;

  @Column()
  requiredCheck!: string;

  @Column()
  rangeMax!: string;

  @ManyToOne(() => Jobs, jobs => jobs.questionnaire, { nullable: true, onDelete: "CASCADE" })
  questionnaire!: Jobs

  @OneToMany(() => SingleChoiceQuestionnaire, (singleChoice) => singleChoice.singleSelection, { createForeignKeyConstraints: true, cascade: true })
  singleSelection!: SingleChoiceQuestionnaire[]

  @OneToMany(() => MultipleChoiceQuestionnaire, (multipleChoice) => multipleChoice.multipleSelection, { createForeignKeyConstraints: true, cascade: true })
  multipleSelection!: MultipleChoiceQuestionnaire[]

  @OneToOne(() => QuestionnaireAnswer, (questionnaire) => questionnaire.questionnaire)
  questionnaireAnswer!: QuestionnaireAnswer

  @Column({ default: true })
  status!: boolean

}