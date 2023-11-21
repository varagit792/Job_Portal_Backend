import { AppDataSource } from '../config/typeorm';
import { StagingEmailTemplates } from '../entities/stagingTemplates.entity';
import 'dotenv/config';
import { generateToken } from '../utils/generateToken';
import { fetchUser } from './user.service';
import { sendEmailVerifyLink } from '../utils/sendEmail';
import { Repository } from 'typeorm';

export const sweepBatchEmailTemplates = async () => {
  try {

    const batchSize = Number(process.env.BATCH_SIZE);
    let cursor: number | null = null;
    const stagingTemplatesRepository = AppDataSource.getRepository(StagingEmailTemplates);
    while (true) {
      const data = await fetchStagingTemplatesDataWithCursor(batchSize, cursor, stagingTemplatesRepository);
      if (data === undefined || data.length === 0) {
        break;
      };
      await processFetchedTemplateData(data);
      cursor = data[data.length - 1].id;
      await deleteProcessedStagingTemplates(data, stagingTemplatesRepository);
    }

  } catch (error) {
    console.log('error in the process of sweep batch process ', error);
    return;
  }
}

export const fetchStagingTemplatesDataWithCursor = async (batchSize: number, cursor: number | null, stagingTemplatesRepository: Repository<StagingEmailTemplates>) => {
  try {
    console.log('fetch called cursor value', cursor);
    const queryBuilder = await stagingTemplatesRepository.createQueryBuilder('StagingEmailTemplates')
      .orderBy('StagingEmailTemplates.id')
      .take(batchSize)

    if (cursor) {
      queryBuilder.where('StagingEmailTemplates.id > :cursor', {cursor});
    };
    queryBuilder.andWhere('StagingEmailTemplates.templateType = :templateType', { templateType: 'emailVerify' });
    return await queryBuilder.getMany();
  } catch (error) {
    console.log('error in fetch of staging templates', error);
    return;
  }
};

export const processFetchedTemplateData = async (data: StagingEmailTemplates[]): Promise<void> => {
  try {

    for (const [index, stagingTemplates] of data.entries()) {
     
      const user = await fetchUser(stagingTemplates.email);
      if (user) {
        const token = await generateToken(user);
        const mailParams = {
          email: stagingTemplates.email,
          token: token
        }
        // await delay(2000);
        sendEmailVerifyLink(mailParams);
      }
    }

  } catch (error) {
    console.log('error in the process of fetched data ', error);
    return;
  }
}

export const deleteProcessedStagingTemplates = async (stagingEmailTemplates: StagingEmailTemplates[], stagingTemplatesRepository: Repository<StagingEmailTemplates>) => {
  try {

    const ids = stagingEmailTemplates.map((data) => data.id);
    stagingTemplatesRepository.delete(ids);

  } catch (error) {
    console.log('error in delate of staging templates ', error);
    return;
  }
}

const delay = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));