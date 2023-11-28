import { AppDataSource } from '../config/typeorm'
import { ApplyJobs } from '../entities/applyJobs.entity';
export const saveApplyJob = async (applyJobParams: any) => {

  try {

    let applyJob: any;
    const { id, ...updatedApplyJobParams } = applyJobParams
    const userRepository = AppDataSource.getRepository(ApplyJobs);
    const countApplyJob = await userRepository.createQueryBuilder("applyJobs")
      .where("applyJobs.applyUser = :user ", { user: Number(updatedApplyJobParams.params.user) })
      .andWhere("applyJobs.jobs=:jobs", { jobs: Number(updatedApplyJobParams.params.jobs) })
      .getCount();

    if (!countApplyJob) {
      const applyJobRepository = AppDataSource.getRepository(ApplyJobs);
      applyJob = await applyJobRepository.save(updatedApplyJobParams.params)
      return { count: 0, applyJob: applyJob };
    } else {
      return { count: 1, applyJob: countApplyJob };
    }
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const getCountApplicant = async (id: any) => {
  try {

    const userRepository = AppDataSource.getRepository(ApplyJobs);
    const countApplyJob = await userRepository.createQueryBuilder("applyJobs")
      .where("applyJobs.jobs = :jobs ", { jobs: Number(id) })
      .getCount();

    return { count: countApplyJob };
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
export const getApplicantList = async (id: any) => {
  try {
    const applyJobsRepository = AppDataSource.getRepository(ApplyJobs);
    let applyJobs = await applyJobsRepository.find({
      order: {
        id: "DESC",
      },
      where: {
        jobs: id
      },
      relations: {
        multipleChoiceQuestionnaireAnswer: { multipleChoiceQuestionnaire: true },
        questionnaireAnswer: { questionnaire: true },
      }
    });
    return applyJobs;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}