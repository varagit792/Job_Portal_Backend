import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import { Questionnaire } from './questionnaire.entity';

@Entity()
export class MultipleChoiceQuestionnaire extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "text" })
  option!: string;

  @ManyToOne(() => Questionnaire, questionnaire => questionnaire.multipleSelection, { nullable: true, onDelete: "CASCADE" })
  multipleSelection!: Questionnaire

  @Column()
  status!: boolean

}