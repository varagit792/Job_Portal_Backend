import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne } from 'typeorm';
import { Questionnaire } from './questionnaire.entity';
import { MultipleChoiceQuestionnaireAnswer } from './multipleChoiceQuestionnaireAnswer.entity';

@Entity()
export class MultipleChoiceQuestionnaire extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "text" })
  option!: string;

  @ManyToOne(() => Questionnaire, questionnaire => questionnaire.multipleSelection, { nullable: true, onDelete: "CASCADE" })
  multipleSelection!: Questionnaire

  @OneToOne(() => MultipleChoiceQuestionnaireAnswer, (multipleChoiceQuestionnaire) => multipleChoiceQuestionnaire.multipleChoiceQuestionnaire)
  multipleChoiceQuestionnaire!: MultipleChoiceQuestionnaireAnswer

  @Column()
  @Column({ default: true })
  status!: boolean

}