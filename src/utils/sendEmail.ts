import { transport } from '../config/nodemailer';
import * as fs from 'fs/promises';
import path from 'path';
import handleBars from 'handlebars';
import 'dotenv/config';

export const sendEmailVerifyLink = async (mailParams:any) => {
  try {
   
    const __dirname = path.resolve();
    let hbsPath = path.join(__dirname, 'src', 'views', 'layouts', 'emailVerification.hbs');
   
    const content = await fs.readFile(hbsPath, 'utf-8');
    const template = handleBars.compile(content)
    const data = {
      title: 'My Page',
      heading: 'Welcome to my website',
      content: 'This is some content for the page.',
      link: mailParams.link,
    };
   
    const htmlContent = template(data);
    const info = await transport.sendMail({
      from: 'admin@jobportal.com',
      // to: 'srinivasreddy.pamireddy@ratnaglobaltech.com',
      to: mailParams.email,
      subject: 'Email Verification',
      html: htmlContent
    });
    console.log('info id', info.response);
    return info;
  
  } catch (error) {
    console.log('error in email send process :', error);
    throw error;
  }
}


export const sendRecommendedJobAlerts = async (email: string, name:string,jobsList: any) => {
  try {
    
    const __dirname = path.resolve();

    let hbsPathForRecommendedJobs = path.join(__dirname, 'src', 'views', 'layouts', 'recommendedJobsAlert.hbs');
   
    const recommendedJobsContent = await fs.readFile(hbsPathForRecommendedJobs, 'utf-8');
   
    const data = {
      jobs: jobsList,
      name:name
    }
    const template = handleBars.compile(recommendedJobsContent);
    const htmlContent = template(data);
    const info = await transport.sendMail({
      from: 'admin@jobportal.com',
      // to: 'srinivasreddy.pamireddy@ratnaglobaltech.com',
      to: email,
      subject: 'Recommended jobs alert',
      html: htmlContent
    });
    console.log('info id', info.response);
    return info;
  } catch (error) {
    console.log('error in send job alerts ', error);
  }
}
