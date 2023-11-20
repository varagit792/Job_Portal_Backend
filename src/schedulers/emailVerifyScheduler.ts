import nodeSchedule from 'node-schedule';
import { sweepBatchEmailTemplates } from '../services/stagingEmailTemplates.service';

export const sweepEmailTemplatesDb = () => {
  nodeSchedule.scheduleJob('*/5 * * * *', sweepBatchEmailTemplates);  
}