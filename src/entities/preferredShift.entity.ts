import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne } from 'typeorm';
import { CareerProfile } from './careerProfile.entity';
import { CareerProfilePreferredShift } from './careerProfilePreferredShift.entity';

@Entity()
export class PreferredShift extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  title!: string;

  @Column()
  status!: boolean

  @OneToOne(() => CareerProfilePreferredShift, (careerProfilePreferredShift) => careerProfilePreferredShift.preferredShift)
  careerProfilePreferredShift!: CareerProfilePreferredShift

}