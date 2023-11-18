import nodeSchedule from 'node-schedule';
import { sweepBatchJobSeekerProfiles } from '../services/jobSeekerProfile.service';

export const sweepJobSeekerProfileDb = () => {
  nodeSchedule.scheduleJob('*/1 * * * *', sweepBatchJobSeekerProfiles)
}