import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import { Questionnaire } from './questionnaire.entity';

@Entity()
export class SingleChoiceQuestionnaire extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "text" })
  option!: string;

  @ManyToOne(() => Questionnaire, questionnaire => questionnaire.singleSelection, { nullable: true, onDelete: "CASCADE" })
  singleSelection!: Questionnaire

  @Column({ default: true })
  status!: boolean

}