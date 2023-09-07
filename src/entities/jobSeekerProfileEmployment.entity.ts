import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';

enum EmploymentType {
  Full_time = 'Full-time',
  Internship = 'Internship'
}

enum CurrencyType {
  Rupee = 'Rupee',
  Dollar = 'Dollar'
}

enum NoticePeriod{
  FifteenDays_or_less = '15Days or less',
  OneMonth = '1 Month',
  TwoMonth = '2 Months',
  ThreeMonth = '3 Months',
  More_than_3Months = 'More than 3 Months',
  Serving_notice_period = 'Serving Notice Period'
}

@Entity()
export class JobSeekerProfileEmployment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ default: true })
  is_current_employment!: boolean

  @Column({
    type: 'enum',
    enum: EmploymentType,
    default: EmploymentType.Full_time
  })
  employment_type!: EmploymentType

  @Column({ default: null, nullable:true })
  total_exp_years!: number
  
  @Column({ default: null, nullable:true })
  total_exp_months!: number

  @Column()
  company_name!: string

  @Column({ default: null, nullable: true })
  designation!: string
  
  @Column()
  joining_date_year!: number
  
  @Column()
  joining_date_month!: string

  @Column({default: null, nullable: true})
  location_id!: number
  
  @Column({ default: null, nullable: true })
  department_id!: number
  
  @Column({ default: null, nullable: true })
  current_salary!: number

  @Column({
    type: 'enum',
    enum: CurrencyType,
    default: CurrencyType.Rupee
  })
  currency_type!: CurrencyType

  @Column({ default: null, nullable: true })
  monthly_stipend!: number

  @Column({
    type: 'enum',
    enum: CurrencyType,
    default: CurrencyType.Rupee
  })
  monthly_stipend_currency_type!: CurrencyType

  @Column({
    type: 'text',
  })
  job_profile!: string;

  @Column({
    type: 'enum',
    enum: NoticePeriod,
    default: null,
    nullable: true
  })
  notice_period!: NoticePeriod

  @Column({ default: null, nullable: true })
  worked_till_year!: number

  @Column({ default: null, nullable: true })
  worked_till_month!: string
 
}