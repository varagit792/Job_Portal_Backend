import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Jobs } from './jobs.entity';
import { Location } from './location.entity';
import { Department } from './department.entity';

@Entity()
export class Companies extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id!: number

  @Column({unique:true})
  title!: string;

  @Column({default:false})
  status!: boolean

  @ManyToOne(() => Companies, companies => companies.user, { nullable: true, onDelete: "CASCADE" })
  user!: Companies

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

  @OneToMany(() => Location, (location) => location.company, { nullable:true, createForeignKeyConstraints: true, cascade: true, })
  location!: Location[] | null

  @OneToMany(() => Department, (department) => department.companies, { nullable:true, createForeignKeyConstraints: true, cascade: true, })
  department!: Department[] | null

  @CreateDateColumn()
  createdAt: Date | undefined;

  @UpdateDateColumn()
  updatedAt: Date | undefined;
}