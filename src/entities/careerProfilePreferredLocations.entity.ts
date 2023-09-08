import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { CareerProfile } from './careerProfile.entity';
import { Location } from './location.entity';

@Entity()
export class CareerProfilePreferredLocations extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @ManyToOne(() => CareerProfile, (careerProfile) => careerProfile.careerProfilePreferredLocations, { nullable: false, onDelete: "CASCADE" })
  public careerProfile!: CareerProfile

  @OneToOne(() => Location)
  @JoinColumn({ name: "locationId" })
  location!: Location

}