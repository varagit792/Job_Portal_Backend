import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Jobs } from './jobs.entity';
import { Location } from './location.entity';
import { Department } from './department.entity';
import { CompanyType } from './companyType.entity';
import { Industry } from './industry.entity';
import { User } from './user.entity';

@Entity()
export class Companies extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id!: number

  @Column({unique:true})
  title!: string;

  @Column({default:false})
  status!: boolean

  @OneToMany(() => User, user => user.companies, { nullable: true, onDelete: "CASCADE" })
  user!: User

  @Column({ type: "text", nullable:true, default:null})
  companyDescription: string | undefined;

  // @Column({nullable:true, default:null})
  // jobs!: number;

  @OneToMany(() => Jobs, (jobs) => jobs.company, { nullable: true, createForeignKeyConstraints: true, cascade: true })
  jobs!: Jobs[] | null

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

  @OneToMany(() => CompanyType, (comapanyType) => comapanyType.companies, { nullable:true, createForeignKeyConstraints: true, cascade: true, })
  companyType!: CompanyType[] | null

  @OneToMany(() => Industry, (industry) => industry.companies, { nullable:true, createForeignKeyConstraints: true, cascade: true, })
  industry!: Industry[] | null

  @CreateDateColumn()
  createdAt: Date | undefined;

  @UpdateDateColumn()
  updatedAt: Date | undefined;
}