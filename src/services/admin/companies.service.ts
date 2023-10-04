import { AppDataSource } from '../../config/typeorm'
import { Companies } from '../../entities/companies.entity';

export const saveCompanies = async (companiesParams: Companies) => {
  try {
    let companies: any;
    const companiesRepository = AppDataSource.getRepository(Companies);
    if (companiesParams?.id) {
      companies = await companiesRepository.findOne({
        where: {
          id: companiesParams?.id
        },
        //relations: ["jobsKeySkills"]
      });

      companies.id = Number(companiesParams?.id);
      companies.title = companiesParams?.title,
        companies.companyDescription = companiesParams?.companyDescription,
        // companies.payScaleLowerRange = companiesParams?.payScaleLowerRange,
        // companies.jobsOpening = companiesParams?.jobsOpening,
        // companies.userType = companiesParams?.userType,
        // companies.company = companiesParams?.company,
        // companies.totalExpYearStart = companiesParams?.totalExpYearStart,
        // companies.totalExpYearEnd = companiesParams?.totalExpYearEnd,
        // companies.numberSystem = companiesParams?.numberSystem,
        // companies.recurrence = companiesParams?.recurrence,
        // companies.jobsLocation = companiesParams?.jobsLocation,
        // companies.jobsRole = companiesParams?.jobsRole,
        // companies.industryType = companiesParams?.industryType,
        // companies.department = companiesParams?.department,
        // companies.employeeType = companiesParams?.employeeType,
        // companies.jobType = companiesParams?.jobType,
        // companies.roleCategory = companiesParams?.roleCategory,
        // companies.education = companiesParams?.education,
        // companies.education = companiesParams?.education,
        companies.user = companiesParams?.user
      // companiesParams?.jobsKeySkills?.forEach((child: any) => {
      //   if (child.id) {
      //     const updatedChild = jobsParams?.jobsKeySkills?.find((item) => Number(item?.jobsKeySkills) === Number(child?.jobsKeySkills));
      //     if (updatedChild) {
      //       child.jobsKeySkills.jobsKeySkills = updatedChild?.jobsKeySkills?.jobsKeySkills,
      //         child.jobsKeySkills.preferred = child?.jobsKeySkills?.preferred

      //     }
      //   }
      // });

      companies = await companiesRepository.save(companies);
    } else {
      companies = await companiesRepository.save(companiesParams)
    }
    return companies;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const allCompanies = async (offset: any = 1) => {
  const page = Number(process.env.JOB_PER_PAGE);
  const skip = (page * offset) - page;
  try {
    const companiesRepository = AppDataSource.getRepository(Companies);
    const companies = await companiesRepository.find({
      order: {
        id: "DESC",
      },
      relations: {
        //company: true,
        // totalExpYearStart: true,
        // totalExpYearEnd: true,
        // numberSystem: true,
        // recurrence: true,
        // jobsLocation: true,
        // jobsRole: true,
        // industryType: true,
        // department: true,
        // employeeType: true,
        // jobType: true,
        // roleCategory: true,
        // education: true,
        user: true,
        //jobsKeySkills: { keySkills: true }
      },
      skip: (skip),
      take: (page),

    });

    return companies;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const getCompanyDetails = async (id: number) => {

  try {
    const companiesRepository = AppDataSource.getRepository(Companies);
    const company = await companiesRepository.findOne({
      where: { id },
      relations: {
        // //company: true,
        // totalExpYearStart: true,
        // totalExpYearEnd: true,
        // numberSystem: true,
        // recurrence: true,
        // jobsLocation: true,
        // jobsRole: true,
        // industryType: true,
        // department: true,
        // employeeType: true,
        // jobType: true,
        // roleCategory: true,
        // education: true,
        user: true,
        //jobsKeySkills: { keySkills: true }
      },
    });

    return company;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}


