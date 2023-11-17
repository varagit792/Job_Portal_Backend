import { Entity, PrimaryGeneratedColumn, BaseEntity, Column } from 'typeorm';

@Entity() 
export class StagingEmailTemplates extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  email!: string;

  @Column()
  templateType!: string;
}