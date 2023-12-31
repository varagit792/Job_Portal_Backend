import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Jobs } from './jobs.entity';
import { Location } from './location.entity';

@Entity()
export class Company extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  title!: string;

  @Column({default:false})
  status!: boolean

  @Column({ type: "text", nullable:true, default:null})
  companyDescription: string | undefined;

  @Column({nullable:true, default:null})
  jobs!: number;

  @Column({nullable:true, default:null})
  employeeCount!: number;

  @Column('decimal', { precision: 10, scale: 1 , nullable:true, default:null}) 
  rating!: number;

  @Column({nullable:true, default:null})
  reviews!: number;
  
  @OneToOne(() => Jobs, (jobs) => jobs.company)
  company!: Jobs

  // @OneToMany(() => Location, (location) => location.company, { nullable:true, createForeignKeyConstraints: true, cascade: true, })
  // location!: Location[] | null

  @CreateDateColumn()
  createdAt: Date | undefined;

  @UpdateDateColumn()
  updatedAt: Date | undefined;

  // @ManyToOne(() => User, user => user.company, { nullable: true, onDelete: "CASCADE" })
  // user!: User

}
