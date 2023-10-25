import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import { JobSeekerProfile } from './jobSeekerProfile.entity';
import { Jobs } from './jobs.entity';
import { Companies } from './companies.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @Column({ nullable: false, unique: true })
  email!: string

  @Column({ default: null })
  accountType!: string

  @Column({ default: null })
  accountId!: string

  @Column({ default: null })
  mobileNumber!: string

  @Column({ default: null })
  hashedPassword?: string

  @Column({ default: null })
  userType!: string

  @OneToOne(() => JobSeekerProfile)
  @JoinColumn()
  jobSeekerProfile!: JobSeekerProfile

  @Column({ default: false })
  isEmailVerified!: boolean

  @Column({ default: false })
  isMobileVerified!: boolean

  @Column({ default: null, nullable: true })
  otp!: string

  // @OneToMany(() => Jobs, (jobs) => jobs.user, { createForeignKeyConstraints: true, cascade: true })
  // user!: Jobs[]

  @ManyToOne(() => Companies, (companies) => companies.user, { createForeignKeyConstraints: true, cascade: true })
  companies!: Companies[]

}
