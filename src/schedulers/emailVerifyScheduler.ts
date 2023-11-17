import nodeSchedule from 'node-schedule';
import { sweepBatchEmailTemplates } from '../services/stagingTemplates.service';

export const sweepEmailTemplatesDb = () => {
  nodeSchedule.scheduleJob('*/1 * * * *', sweepBatchEmailTemplates);  
}