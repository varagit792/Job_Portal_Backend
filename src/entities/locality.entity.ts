import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne } from 'typeorm';
import { JobLocality } from './jobLocality.entity';

@Entity()
export class Locality extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  title!: string;

  @Column()
  status!: boolean

  @OneToOne(() => JobLocality, (jobs) => jobs.locality)
  locality!: JobLocality

}