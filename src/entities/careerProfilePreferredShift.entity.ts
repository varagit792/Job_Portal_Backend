import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { CareerProfile } from './careerProfile.entity';
import { PreferredShift } from './preferredShift.entity';

@Entity()
export class CareerProfilePreferredShift extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @ManyToOne(() => CareerProfile, (careerProfile) => careerProfile.careerProfileEmployeeType, { nullable: false, onDelete: "CASCADE" })
  public careerProfile!: CareerProfile

  @OneToOne(() => PreferredShift, (preferredShift) => preferredShift.careerProfilePreferredShift, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "preferredShiftId" })
  preferredShift!: PreferredShift

}