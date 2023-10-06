import { LessThanOrEqual } from 'typeorm';
import { AppDataSource } from '../../config/typeorm'
import { JobCandidateIndustry } from '../../entities/jobCandidateIndustry.entity';
import { JobEducation } from '../../entities/jobEducation.entity';
import { JobLocality } from '../../entities/jobLocality.entity';
import { JobLocation } from '../../entities/jobLocation.entity';
import { JobsKeySkills } from '../../entities/jobsKeySkills.entity';
import { Jobs } from '../../entities/jobs.entity';
const appJobsKeySkills = AppDataSource.getRepository(JobsKeySkills);
const appJobLocation = AppDataSource.getRepository(JobLocation);
const appJobLocality = AppDataSource.getRepository(JobLocality);
const appJobEducation = AppDataSource.getRepository(JobEducation);
const appJobCandidateIndustry = AppDataSource.getRepository(JobCandidateIndustry);

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
        jobs.jobsType = jobsParams?.jobsType,
        jobs.department = jobsParams?.department,
        jobs.roleCategory = jobsParams?.roleCategory,
        jobs.jobsRole = jobsParams?.jobsRole,
        jobs.workMode = jobsParams?.workMode,
        jobs.candidateRelocate = jobsParams?.candidateRelocate,
        jobs.totalExpYearStart = jobsParams?.totalExpYearStart,
        jobs.totalExpYearEnd = jobsParams?.totalExpYearEnd,
        jobs.currency = jobsParams?.currency,
        jobs.payScaleLowerRange = jobsParams?.payScaleLowerRange,
        jobs.payScaleUpperRange = jobsParams?.payScaleUpperRange,
        jobs.numberSystem = jobsParams?.numberSystem,
        jobs.recurrence = jobsParams?.recurrence,
        jobs.hideSalaryDetails = jobsParams?.hideSalaryDetails,
        jobs.companyIndustry = jobsParams?.companyIndustry,
        jobs.premiumBTech = jobsParams?.premiumBTech,
        jobs.premiumMBAAll = jobsParams?.premiumMBAAll,
        jobs.diversityHiring = jobsParams?.diversityHiring,
        jobs.jobDescription = jobsParams?.jobDescription,
        jobs.jobsOpening = jobsParams?.jobsOpening,
        jobs.videoProfile = jobsParams?.videoProfile,
        jobs.includeWalkInDetails = jobsParams?.includeWalkInDetails,
        jobs.notifyMeAbout = jobsParams?.notifyMeAbout,
        jobs.notificationEmailAddress1 = jobsParams?.notificationEmailAddress1,
        jobs.notificationEmailAddress2 = jobsParams?.notificationEmailAddress2,
        jobs.company = jobsParams?.company,
        jobs.companyWebsite = jobsParams?.companyWebsite,
        jobs.aboutCompany = jobsParams?.aboutCompany,
        jobs.companyAddress = jobsParams?.companyAddress,
        jobs = await jobsRepository.save(jobs);

      await appJobsKeySkills.delete({ jobsKeySkills: jobsParams.id as any });
      for (let i = 0; i < jobsParams.jobsKeySkills.length; i++) {
        let jobsSkills: any = new Object();
        jobsSkills.jobsKeySkills = jobsParams.id;
        jobsSkills.preferred = jobsParams.jobsKeySkills[i].preferred;
        jobsSkills.keySkills = jobsParams.jobsKeySkills[i].keySkills;
        await appJobsKeySkills.save(jobsSkills);
      }

      await appJobLocation.delete({ jobsLocation: jobsParams.id as any });
      for (let i = 0; i < jobsParams.jobsLocation.length; i++) {
        let jbsLocation: any = new Object();
        jbsLocation.jobsLocation = jobsParams.id;
        jbsLocation.location = jobsParams.jobsLocation[i].location;
        await appJobLocation.save(jbsLocation);
      }

      await appJobLocality.delete({ jobLocality: jobsParams.id as any });
      for (let i = 0; i < jobsParams.jobLocality.length; i++) {
        let jbsLocality: any = new Object();
        jbsLocality.jobLocality = jobsParams.id;
        jbsLocality.locality = jobsParams.jobLocality[i].locality;
        await appJobLocality.save(jbsLocality);
      }

      await appJobEducation.delete({ jobEducation: jobsParams.id as any });
      for (let i = 0; i < jobsParams.jobEducation.length; i++) {
        let jbsEducation: any = new Object();
        jbsEducation.jobEducation = jobsParams.id;
        jbsEducation.education = jobsParams.jobEducation[i].education;
        await appJobEducation.save(jbsEducation);
      }

      await appJobCandidateIndustry.delete({ candidateIndustry: jobsParams.id as any });
      for (let i = 0; i < jobsParams.jobCandidateIndustry.length; i++) {
        let jbsCandidateIndustry: any = new Object();
        jbsCandidateIndustry.jobCandidateIndustry = jobsParams.id;
        jbsCandidateIndustry.candidateIndustry = jobsParams.jobCandidateIndustry[i].candidateIndustry;
        await appJobCandidateIndustry.save(jbsCandidateIndustry);
      }
    } else {
      jobs = await jobsRepository.save(jobsParams)
    }
    return jobs;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
export const jobsList = async (data: any) => {
  const page = Number(process.env.JOB_PER_PAGE);
  const skip = (page * data?.page) - page;
  try {
    const jobsRepository = AppDataSource.getRepository(Jobs);
    let jobs = await jobsRepository.find({
      order: {
        id: "DESC",
      },
      where: {
        ...((data?.data?.expYear > 1) && { totalExpYearEnd: { id: LessThanOrEqual(data?.data?.expYear) } })
      },
      relations: {
        company: true,
        totalExpYearStart: true,
        totalExpYearEnd: true,
        numberSystem: true,
        recurrence: true,
        jobsLocation: { location: true },
        companyIndustry: true,
        jobsRole: true,
        workMode: true,
        department: true,
        jobCandidateIndustry: { candidateIndustry: true },
        currency: true,
        payScaleLowerRange: true,
        payScaleUpperRange: true,
        jobsType: true,
        roleCategory: true,
        jobEducation: { education: true },
        jobLocality: { locality: true },
        user: true,
        jobsKeySkills: { keySkills: true }
      },
      skip: (skip),
      take: (page),
    });
    return jobs;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const getJobDetails = async (id: number) => {

  try {
    const jobsRepository = AppDataSource.getRepository(Jobs);
    const job = await jobsRepository.findOne({
      where: { id },
      relations: {
        company: true,
        totalExpYearStart: true,
        totalExpYearEnd: true,
        numberSystem: true,
        recurrence: true,
        jobsLocation: { location: true },
        companyIndustry: true,
        jobsRole: true,
        workMode: true,
        department: true,
        jobCandidateIndustry: { candidateIndustry: true },
        currency: true,
        payScaleLowerRange: true,
        payScaleUpperRange: true,
        jobsType: true,
        roleCategory: true,
        jobEducation: { education: true },
        jobLocality: { locality: true },
        user: true,
        jobsKeySkills: { keySkills: true }
      },
    });

    return job;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
