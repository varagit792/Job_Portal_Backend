import { AppDataSource } from '../../config/typeorm'
import { Jobs } from '../../entities/jobs.entity';

export const saveJobs = async (jobsParams: Jobs) => {
  try {
    let jobs: any;
    const jobsRepository = AppDataSource.getRepository(Jobs);
    if (jobsParams?.id) {
      jobs = await jobsRepository.findOne({
        where: {
          id: jobsParams?.id
        },
        relations: ["jobsKeySkills"]
      });

      jobs.id = Number(jobsParams?.id);
      jobs.title = jobsParams?.title,
        jobs.payScaleLowerRange = jobsParams?.payScaleLowerRange,
        jobs.jobsOpening = jobsParams?.jobsOpening,
        jobs.userType = jobsParams?.userType,
        jobs.jobDescription = jobsParams?.jobDescription,
        jobs.company = jobsParams?.company,
        jobs.totalExpYearStart = jobsParams?.totalExpYearStart,
        jobs.totalExpYearEnd = jobsParams?.totalExpYearEnd,
        jobs.numberSystem = jobsParams?.numberSystem,
        jobs.recurrence = jobsParams?.recurrence,
        jobs.jobsLocation = jobsParams?.jobsLocation,
        jobs.jobsRole = jobsParams?.jobsRole,
        jobs.industryType = jobsParams?.industryType,
        jobs.department = jobsParams?.department,
        jobs.employeeType = jobsParams?.employeeType,
        jobs.jobType = jobsParams?.jobType,
        jobs.roleCategory = jobsParams?.roleCategory,
        jobs.education = jobsParams?.education,
        jobs.education = jobsParams?.education,
        jobs.user = jobsParams?.user
      jobsParams?.jobsKeySkills?.forEach((child: any) => {
        if (child.id) {
          const updatedChild = jobsParams?.jobsKeySkills?.find((item) => Number(item?.jobsKeySkills) === Number(child?.jobsKeySkills));
          if (updatedChild) {
            child.jobsKeySkills.jobsKeySkills = updatedChild?.jobsKeySkills?.jobsKeySkills,
              child.jobsKeySkills.preferred = child?.jobsKeySkills?.preferred

          }
        }
      });

      jobs = await jobsRepository.save(jobs);
    } else {
      jobs = await jobsRepository.save(jobsParams)
    }
    return jobs;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const allJobs = async () => {
  try {
    const jobsRepository = AppDataSource.getRepository(Jobs);
    const jobs = await jobsRepository.findOneBy({
      status: true
    });
    console.log(jobs);

    return jobs;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

