import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany } from 'typeorm';
import { SingleChoiceQuestionnaire } from './singleChoiceQuestionnaire.entity';
import { MultipleChoiceQuestionnaire } from './multipleChoiceQuestionnaire.entity';
import { Jobs } from './jobs.entity';

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

  @Column({ default: true })
  status!: boolean

}