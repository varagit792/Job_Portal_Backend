import { AppDataSource } from '../config/typeorm'
import { ApplyJobs } from '../entities/applyJobs.entity';
export const saveApplyJob = async (applyJobParams: any) => {

  try {
    let applyJob: any;
    const { id, ...updatedApplyJobParams } = applyJobParams
    const applyJobRepository = AppDataSource.getRepository(ApplyJobs);
    let [countApplyJob, count] = await applyJobRepository.findAndCount({
      where: {
        user: updatedApplyJobParams.user,
        jobs: updatedApplyJobParams.jobs
      }
    });

    if (count === 0) {
      applyJob = await applyJobRepository.save(updatedApplyJobParams)
      return { count: count, applyJob: applyJob };
    } else {
      return { count: count, applyJob: countApplyJob };
    }
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const getCountApplicantWithList = async (id: any) => {
  try {
    const applyJobRepository = AppDataSource.getRepository(ApplyJobs);
    let [countApplyJob, count] = await applyJobRepository.findAndCount({
      where: {
        jobs: id
      }
    });

    return { count: count, applyJob: countApplyJob };
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
