import { In, LessThanOrEqual } from 'typeorm';
import { AppDataSource } from '../../config/typeorm'
import { JobCandidateIndustry } from '../../entities/jobCandidateIndustry.entity';
import { JobEducation } from '../../entities/jobEducation.entity';
import { JobLocality } from '../../entities/jobLocality.entity';
import { JobLocation } from '../../entities/jobLocation.entity';
import { JobsKeySkills } from '../../entities/jobsKeySkills.entity';
import { Jobs } from '../../entities/jobs.entity';
import { Questionnaire } from '../../entities/questionnaire.entity';
import { SingleChoiceQuestionnaire } from '../../entities/singleChoiceQuestionnaire.entity';
import { MultipleChoiceQuestionnaire } from '../../entities/multipleChoiceQuestionnaire.entity';
const appJobsKeySkills = AppDataSource.getRepository(JobsKeySkills);
const appJobLocation = AppDataSource.getRepository(JobLocation);
const appJobLocality = AppDataSource.getRepository(JobLocality);
const appJobEducation = AppDataSource.getRepository(JobEducation);
const appJobCandidateIndustry = AppDataSource.getRepository(JobCandidateIndustry);
const appJobsQuestionnaire = AppDataSource.getRepository(Questionnaire);
const appJobsSingleChoiceQuestionnaire = AppDataSource.getRepository(SingleChoiceQuestionnaire);
const appJobsMultipleChoiceQuestionnaire = AppDataSource.getRepository(MultipleChoiceQuestionnaire);

export const saveJobs = async (jobsParams: Jobs) => {

  try {
    let jobs: any;
    const { id, ...updatedJobsParams } = jobsParams
    const jobsRepository = AppDataSource.getRepository(Jobs);
    if (jobsParams?.id) {
      jobs = await jobsRepository.findOne({
        where: {
          id: jobsParams?.id
        },
        relations: ["jobsKeySkills"]
      });

      jobs.id = Number(jobsParams?.id);
      jobs.title = jobsParams?.title ? jobsParams?.title : jobs.title,
        jobs.jobsType = jobsParams?.jobsType ? jobsParams?.jobsType : jobs.jobsType,
        jobs.department = jobsParams?.department ? jobsParams?.department : jobs.department,
        jobs.roleCategory = jobsParams?.roleCategory ? jobsParams?.roleCategory : jobs.roleCategory,
        jobs.jobsRole = jobsParams?.jobsRole ? jobsParams?.jobsRole : jobs.jobsRole,
        jobs.workMode = jobsParams?.workMode ? jobsParams?.workMode : jobs.workMode,
        jobs.candidateRelocate = jobsParams?.candidateRelocate ? jobsParams?.candidateRelocate : jobs.candidateRelocate,
        jobs.totalExpYearStart = jobsParams?.totalExpYearStart ? jobsParams?.totalExpYearStart : jobs.totalExpYearStart,
        jobs.totalExpYearEnd = jobsParams?.totalExpYearEnd ? jobsParams?.totalExpYearEnd : jobs.totalExpYearEnd,
        jobs.currency = jobsParams?.currency ? jobsParams?.currency : jobs.currency,
        jobs.payScaleLowerRange = jobsParams?.payScaleLowerRange ? jobsParams?.payScaleLowerRange : jobs.payScaleLowerRange,
        jobs.payScaleUpperRange = jobsParams?.payScaleUpperRange ? jobsParams?.payScaleUpperRange : jobs.payScaleUpperRange,
        jobs.numberSystem = jobsParams?.numberSystem ? jobsParams?.numberSystem : jobs.numberSystem,
        jobs.recurrence = jobsParams?.recurrence ? jobsParams?.recurrence : jobs.recurrence,
        jobs.jobStatus = jobsParams?.jobStatus ? jobsParams?.jobStatus : jobs.jobStatus,
        jobs.jobExpiry = jobsParams?.jobExpiry ? jobsParams?.jobExpiry : jobs.jobExpiry,
        jobs.hideSalaryDetails = jobsParams?.hideSalaryDetails ? jobsParams?.hideSalaryDetails : jobs.hideSalaryDetails,
        jobs.companyType = jobsParams?.companyType ? jobsParams?.companyType : jobs.companyType,
        jobs.premiumBTech = jobsParams?.premiumBTech ? jobsParams?.premiumBTech : jobs.premiumBTech,
        jobs.premiumMBAAll = jobsParams?.premiumMBAAll ? jobsParams?.premiumMBAAll : jobs.premiumMBAAll,
        jobs.diversityHiring = jobsParams?.diversityHiring ? jobsParams?.diversityHiring : jobs.diversityHiring,
        jobs.jobDescription = jobsParams?.jobDescription ? jobsParams?.jobDescription : jobs.jobDescription,
        jobs.keyResponsibility = jobsParams?.keyResponsibility ? jobsParams?.keyResponsibility : jobs.keyResponsibility,
        jobs.jobsOpening = jobsParams?.jobsOpening ? jobsParams?.jobsOpening : jobs.jobsOpening,
        jobs.videoProfile = jobsParams?.videoProfile ? jobsParams?.videoProfile : jobs.videoProfile,
        jobs.includeWalkInDetails = jobsParams?.includeWalkInDetails ? jobsParams?.includeWalkInDetails : jobs.includeWalkInDetails,
        jobs.notifyMeAbout = jobsParams?.notifyMeAbout ? jobsParams?.notifyMeAbout : jobs.notifyMeAbout,
        jobs.notificationEmailAddress1 = jobsParams?.notificationEmailAddress1 ? jobsParams?.notificationEmailAddress1 : jobs.notificationEmailAddress1,
        jobs.notificationEmailAddress2 = jobsParams?.notificationEmailAddress2 ? jobsParams?.notificationEmailAddress2 : jobs.notificationEmailAddress2,
        jobs.company = jobsParams?.company ? jobsParams?.company : jobs.company,
        jobs.companyWebsite = jobsParams?.companyWebsite ? jobsParams?.companyWebsite : jobs.companyWebsite,
        jobs.aboutCompany = jobsParams?.aboutCompany ? jobsParams?.aboutCompany : jobs.aboutCompany,
        jobs.companyAddress = jobsParams?.companyAddress ? jobsParams?.companyAddress : jobs.companyAddress,

        jobs = await jobsRepository.save(jobs);

      if (jobsParams?.jobsKeySkills) {
        await appJobsKeySkills.delete({ jobsKeySkills: jobsParams.id as any });
        for (let i = 0; i < jobsParams.jobsKeySkills.length; i++) {
          let jobsSkills: any = new Object();
          jobsSkills.jobsKeySkills = jobsParams.id;
          jobsSkills.preferred = jobsParams.jobsKeySkills[i].preferred;
          jobsSkills.keySkills = jobsParams.jobsKeySkills[i].keySkills;
          await appJobsKeySkills.save(jobsSkills);
        }
      }
      if (jobsParams?.jobsLocation) {
        await appJobLocation.delete({ jobsLocation: jobsParams.id as any });
        for (let i = 0; i < jobsParams.jobsLocation.length; i++) {
          let jbsLocation: any = new Object();
          jbsLocation.jobsLocation = jobsParams.id;
          jbsLocation.location = jobsParams.jobsLocation[i].location;
          await appJobLocation.save(jbsLocation);
        }
      }
      if (jobsParams?.jobLocality) {
        await appJobLocality.delete({ jobLocality: jobsParams.id as any });
        for (let i = 0; i < jobsParams.jobLocality.length; i++) {
          let jbsLocality: any = new Object();
          jbsLocality.jobLocality = jobsParams.id;
          jbsLocality.locality = jobsParams.jobLocality[i].locality;
          await appJobLocality.save(jbsLocality);
        }
      }
      if (jobsParams?.jobEducation) {
        await appJobEducation.delete({ jobEducation: jobsParams.id as any });
        for (let i = 0; i < jobsParams.jobEducation.length; i++) {
          let jbsEducation: any = new Object();
          jbsEducation.jobEducation = jobsParams.id;
          jbsEducation.education = jobsParams.jobEducation[i].education;
          await appJobEducation.save(jbsEducation);
        }
      }
      if (jobsParams?.jobCandidateIndustry) {
        await appJobCandidateIndustry.delete({ candidateIndustry: jobsParams.id as any });
        for (let i = 0; i < jobsParams.jobCandidateIndustry.length; i++) {
          let jbsCandidateIndustry: any = new Object();
          jbsCandidateIndustry.jobCandidateIndustry = jobsParams.id;
          jbsCandidateIndustry.candidateIndustry = jobsParams.jobCandidateIndustry[i].candidateIndustry;
          await appJobCandidateIndustry.save(jbsCandidateIndustry);
        }
      }

      if (jobsParams?.questionnaire) {
        await appJobsQuestionnaire.delete({ questionnaire: jobsParams.id as any });
        for (let i = 0; i < jobsParams.questionnaire.length; i++) {
          let questionnaire: any = new Object();
          questionnaire.questionnaire = jobsParams.id;
          questionnaire.question = jobsParams.questionnaire[i].question;
          questionnaire.questionType = jobsParams.questionnaire[i].questionType;
          questionnaire.characterLimit = jobsParams.questionnaire[i]?.characterLimit;
          questionnaire.requiredCheck = jobsParams.questionnaire[i].requiredCheck;
          questionnaire.rangeMax = jobsParams.questionnaire[i].rangeMax;
          await appJobsQuestionnaire.save(questionnaire);

          // This for Single choice questionnaire update
          if (jobsParams?.questionnaire[i]?.singleSelection) {
            for (let iSingle = 0; iSingle < jobsParams.questionnaire[i]?.singleSelection.length; i++) {
              let singleQuestionnaire: any = new Object();
              singleQuestionnaire.questionnaire[i].singleSelection = jobsParams.questionnaire[i].id;
              singleQuestionnaire.questionnaire[i].singleSelection[iSingle].option = jobsParams.questionnaire[i].singleSelection[iSingle].option;
              await appJobsSingleChoiceQuestionnaire.save(singleQuestionnaire);
            }
          }

          // This for Multiple choice questionnaire update
          if (jobsParams?.questionnaire[i]?.multipleSelection) {
            for (let iSMultiple = 0; iSMultiple < jobsParams.questionnaire[i]?.multipleSelection.length; i++) {
              let multipleQuestionnaire: any = new Object();
              multipleQuestionnaire.questionnaire[i].multipleSelection = jobsParams.questionnaire[i].id;
              multipleQuestionnaire.questionnaire[i].multipleSelection[iSMultiple].option = jobsParams.questionnaire[i].multipleSelection[iSMultiple].option;
              await appJobsMultipleChoiceQuestionnaire.save(multipleQuestionnaire);
            }
          }
        }
      }
    } else {
      jobs = await jobsRepository.save(updatedJobsParams)
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
        ...((data?.data?.expYear > 1) && { totalExpYearEnd: { id: LessThanOrEqual(data?.data?.expYear) } }),
        ...((data?.data?.department !== undefined && data?.data?.department?.length !== 0) && { department: { id: In(data?.data?.department) } }),
        ...((data?.data?.location !== undefined && data?.data?.location?.length !== 0) && { jobsLocation: { location: { id: In(data?.data?.location) } } }),
        ...((data?.data?.workMode !== undefined && data?.data?.workMode?.length !== 0) && { workMode: { id: In(data?.data?.workMode) } }),
        ...((data?.data?.salary > 1) && { payScaleUpperRange: { id: LessThanOrEqual(data?.data?.salary) } }),
        ...((data?.data?.companyType !== undefined && data?.data?.companyType?.length !== 0) && { companyType: { id: In(data?.data?.companyType) } }),
        ...((data?.data?.roleCategory !== undefined && data?.data?.roleCategory?.length !== 0) && { roleCategory: { id: In(data?.data?.roleCategory) } }),
      },
      relations: {
        company: {
          location: true
        },
        totalExpYearStart: true,
        totalExpYearEnd: true,
        numberSystem: true,
        recurrence: true,
        jobExpiry: true,
        jobStatus: true,
        jobsLocation: { location: true },
        companyType: true,
        jobsRole: true,
        workMode: true,
        department: true,
        jobCandidateIndustry: { candidateIndustry: true },
        questionnaire: { singleSelection: true, multipleSelection: true },
        currency: true,
        payScaleLowerRange: true,
        payScaleUpperRange: true,
        jobsType: true,
        roleCategory: true,
        jobEducation: { education: true },
        jobLocality: { locality: true },
        //user: true,
        jobsKeySkills: { keySkills: true },
        employmentType: true,
        
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
        company: {
          user: true,
          location: true
        },
        // company: true,
        totalExpYearStart: true,
        totalExpYearEnd: true,
        numberSystem: true,
        recurrence: true,
        jobExpiry: true,
        jobStatus: true,
        jobsLocation: { location: true },
        companyType: true,
        jobsRole: true,
        workMode: true,
        department: true,
        employmentType: true,
        jobCandidateIndustry: { candidateIndustry: true },
        questionnaire: { singleSelection: true, multipleSelection: true },
        currency: true,
        payScaleLowerRange: true,
        payScaleUpperRange: true,
        jobsType: true,
        roleCategory: true,
        jobEducation: { education: true },
        jobLocality: { locality: true },
        // user: true,
        jobsKeySkills: { keySkills: true }
      },
    });

    return job;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
