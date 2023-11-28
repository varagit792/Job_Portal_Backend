import { AppDataSource } from '../config/typeorm'
import { SaveJob } from '../entities/saveJob.entity';
export const saveJob = async (saveJobParams: any) => {

  try {
    let saveJob: any;
    const userRepository = AppDataSource.getRepository(SaveJob);
    const countSaveJob = await userRepository.createQueryBuilder("saveJobs")
      .where("saveJobs.applyUser = :user ", { user: Number(saveJobParams.params.user) })
      .andWhere("saveJobs.jobs=:jobs", { jobs: Number(saveJobParams.params.jobs) })
      .getCount();

    if (!countSaveJob) {
      const saveJobRepository = AppDataSource.getRepository(SaveJob);
      saveJob = await saveJobRepository.save(saveJobParams.params)
      return { count: 0, saveJob: saveJob };
    } else {
      return { count: 1, saveJob: countSaveJob };
    }
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const deleteJob = async (id: any, userId: any) => {
  try {
    const userRepository = AppDataSource.getRepository(SaveJob);
    const deleteJob = await userRepository.createQueryBuilder("saveJobs")
      .where("saveJobs.jobs = :jobs ", { jobs: Number(id) })
      .andWhere("saveJobs.applyUser = :userId ", { userId: Number(userId) })
      .delete();

    return deleteJob;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const getSaveJobList = async (userId: any) => {
  try {
    const saveJobsRepository = AppDataSource.getRepository(SaveJob);
    let saveJobs = await saveJobsRepository.find({
      order: {
        id: "DESC",
      },
      where: {
        user: userId
      },
      relations: {
        jobs: true,
        user: true,
      }
    });
    return saveJobs;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
