import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { CareerProfile } from './careerProfile.entity';
import { Location } from './location.entity';

@Entity()
export class CareerProfilePreferredLocations extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @ManyToOne(() => CareerProfile, (careerProfile) => careerProfile.careerProfilePreferredLocations, { nullable: false, onDelete: "CASCADE" })
  careerProfile!: CareerProfile

  @OneToOne(() => Location, (location) => location.careerProfilePreferredLocations, {
    cascade: true, onDelete: 'CASCADE', createForeignKeyConstraints: false
  })
  @JoinColumn({ name: "locationId" })
  location!: Location

}