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
      link: `http://localhost:4000/jobSeekerProfile/emailVerify/${mailParams.token}`,
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

