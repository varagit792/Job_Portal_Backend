import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import 'dotenv/config';
import { User } from '../entities/user.entity';
import { Employment } from '../entities/employment.entity';
import { JobSeekerProfile } from '../entities/jobSeekerProfile.entity';
import { TotalExpYear } from '../entities/totalExpYear.entity';
import TotalExpYearSeeder from '../entities/seed/TotalExpYear.seeder';
import { TotalExpMonth } from '../entities/totalExpMonth.entity';
import TotalExpMonthSeeder from '../entities/seed/TotalExpMonth.seeder';
import { Company } from '../entities/company.entity';
import CompanySeeder from '../entities/seed/Company.seeder';
import { JobTitle } from '../entities/jobTitle.entity';
import JobTitleSeeder from '../entities/seed/JobTitle.seeder';
import { Currency } from '../entities/currency.entity';
import CurrencySeeder from '../entities/seed/Currency.seeder';
import { State } from '../entities/state.entity';
import { City } from '../entities/city.entity';
import StateSeeder from '../entities/seed/State.seeder';
// import CitySeeder from '../entities/seed/City.seeder';
import { NoticePeriod } from '../entities/noticePeriod.entity';
import NoticePeriodSeeder from '../entities/seed/NoticePeriod.seeder';
import { AvailabilityToJoin } from '../entities/availabilityToJoin.entity';
import AvailabilityToJoinSeeder from '../entities/seed/AvailabilityToJoin.seeder';
import { KeySkills } from '../entities/keySkills.entity';
import KeySkillsSeeder from '../entities/seed/KeySkills.seeder';
import { Industry } from '../entities/industry.entity';
import IndustrySeeder from '../entities/seed/Industry.seeder';
import { Department } from '../entities/department.entity';
import DepartmentSeeder from '../entities/seed/Department.seeder';
import { RoleCategory } from '../entities/roleCategory.entity';
import { JobRole } from '../entities/jobRole.entity';
import RoleCategorySeeder from '../entities/seed/RoleCategory.seeder';
import JobRoleSeeder from '../entities/seed/JobRole.seeder';
import { Education } from '../entities/education.entity';
import { HighestQualification } from '../entities/highestQualification.entity';
import HighestQualificationSeeder from '../entities/seed/HighestQualification.seeder';
import { Course } from '../entities/course.entity';
import CourseSeeder from '../entities/seed/Course.seeder';
import { Specialization } from '../entities/specialization.entity';
import SpecializationSeeder from '../entities/seed/Specialization.seeder';
import { CourseType } from '../entities/courseType.entity';
import CourseTypeSeeder from '../entities/seed/CourseType.seeder';
import { UniversityInstitute } from '../entities/universityInstitute.entity';
import UniversityInstituteSeeder from '../entities/seed/UniversityInstitute.seeder';
import { Gender } from '../entities/gender.entity';
import GenderSeeder from '../entities/seed/Gender.seeder';
import { Location } from '../entities/location.entity';
import LocationSeeder from '../entities/seed/Location.seeder';
import CitySeeder from '../entities/seed/City.seeder';
import { EducationType } from '../entities/educationType.entity';
import EducationTypeSeeder from '../entities/seed/educationType.seeder';
import { Country } from '../entities/country.entity';
import CountrySeeder from '../entities/seed/Country.seeder';
import PassoutYearSeeder from '../entities/seed/PassOutYear.seeder';
import { PassOutYear } from '../entities/passOutYear.entity';
import { EmployeeType } from '../entities/employeeType.entity';
import EmployeeTypeSeeder from '../entities/seed/EmployeeType.seeder';
import { JobType } from '../entities/jobType.entity';
import JobTypeSeeder from '../entities/seed/JobType.seeder';
import { PreferredShift } from '../entities/preferredShift.entity';
import PreferredShiftSeeder from '../entities/seed/PreferredShift.seeder';
import { CareerProfile } from '../entities/careerProfile.entity';
import { CareerProfileEmployeeType } from '../entities/careerProfileEmployeeType.entity';
import { CareerProfileJobType } from '../entities/careerProfileJobType.entity';
import { CareerProfilePreferredLocations } from '../entities/careerProfilePreferredLocations.entity';
import { CareerProfilePreferredShift } from '../entities/careerProfilePreferredShift.entity';
import { JoiningDateYear } from '../entities/joiningDateYear.entity';
import JoiningDateYearSeeder from '../entities/seed/joiningDateYear.seeder';
import { JoiningDateMonth } from '../entities/joiningDateMonth.entity';
import JoiningDateMonthSeeder from '../entities/seed/joiningDateMonth.seeder';

if (process.env.DB_NAME === undefined) {
  throw new Error('Dbname cannot be undefined')
}
if (process.env.DB_USERNAME === undefined) {
  throw new Error('username cannot be undefined')
}
if (process.env.DB_PASSWORD === undefined) {
  throw new Error('password cannot be undefined')
}
if (process.env.DB_HOST === undefined) {
  throw new Error('db host cannot be undefined')
}
if (process.env.DB_POOL_MAX === undefined) {
  throw new Error('pool max cannot be undefined')
}
if (process.env.DB_POOL_MIN === undefined) {
  throw new Error('pool min Not be undefined')
}
if (process.env.DB_POOL_ACQUIRE === undefined) {
  throw new Error('Dbname Not be undefined')
}
if (process.env.DB_POOL_IDLE === undefined) {
  throw new Error('pool idle Not be undefined')
} if (process.env.DB_PORT === undefined) {
  throw new Error('pool idle Not be undefined')
}

const options: DataSourceOptions & SeederOptions = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [User, JobSeekerProfile, Employment, TotalExpYear, TotalExpMonth, Company, JobTitle, Currency, State, City, NoticePeriod, AvailabilityToJoin, KeySkills, Industry, Department, RoleCategory, JobRole, Education, HighestQualification, Course, Specialization, CourseType, UniversityInstitute, Gender, Location, EducationType, Country, City, PassOutYear, EmployeeType, JobType, PreferredShift, CareerProfile, CareerProfileEmployeeType, CareerProfileJobType, CareerProfilePreferredLocations, CareerProfilePreferredShift, JoiningDateYear, JoiningDateMonth],
  seeds: [TotalExpYearSeeder, TotalExpMonthSeeder, CompanySeeder, JobTitleSeeder, CurrencySeeder, StateSeeder, NoticePeriodSeeder, AvailabilityToJoinSeeder, KeySkillsSeeder, IndustrySeeder, DepartmentSeeder, RoleCategorySeeder, JobRoleSeeder, HighestQualificationSeeder, CourseSeeder, SpecializationSeeder, CourseTypeSeeder, UniversityInstituteSeeder, GenderSeeder, LocationSeeder, EducationTypeSeeder, CountrySeeder, CitySeeder, PassoutYearSeeder, EmployeeTypeSeeder, JobTypeSeeder, PreferredShiftSeeder, JoiningDateYearSeeder, JoiningDateMonthSeeder],
  subscribers: [],
  migrations: [],
}

export const AppDataSource = new DataSource(options);





