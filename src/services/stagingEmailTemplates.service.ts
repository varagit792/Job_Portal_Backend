import { AppDataSource } from '../config/typeorm';
import { StagingEmailTemplates } from '../entities/stagingTemplates.entity';

export const saveStagingEmailTemplates = async (stagingTemplateParams: StagingEmailTemplates) => {
  try {
    
    const stagingEmailTemplatesRepository =  AppDataSource.getRepository(StagingEmailTemplates);
   await  stagingEmailTemplatesRepository.save(stagingTemplateParams);
    return;

  } catch (error) {
    console.log('Error in store of StagingEmailTemplates ', error);
    throw error;
  }
}