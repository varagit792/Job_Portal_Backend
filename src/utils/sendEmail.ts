import { transport } from '../config/nodemailer';
import fs from 'fs';
import path from 'path';
import handleBars from 'handlebars';

export const sendEmailVerifyLink = async (mailParams:any) => {
  try {
    
    const __dirname = path.resolve();
    let hbsPath = path.join(__dirname, 'src', 'views', 'layouts', 'emailVerification.hbs');
    let emailVerifyIconPath = path.join(__dirname, 'src', 'public', 'assets', 'svg', 'emailVerifyIcon.svg');
    console.log('hbs path ', hbsPath, 'email icon ', emailVerifyIconPath);

    fs.readFile(hbsPath, 'utf-8', async (err, content) => {
      if (err) {
        console.log('error in load of file ', err);
        return;
      } 
      const imageData = fs.readFileSync(emailVerifyIconPath);
      //convert to base64;
      const imageDataBase64 = imageData.toString('base64');
      const template = handleBars.compile(content)
      const data = {
        title: 'My Page',
        heading: 'Welcome to my website',
        content: 'This is some content for the page.',
        link: `http://localhost:4000/jobSeekerProfile/emailVerify/${mailParams.token}`,
        emailIcon: imageDataBase64
      };
      const htmlContent = template(data);
      const info = await transport.sendMail({
        from: 'admin@jobportal.com',
        // to: 'srinivasreddy.pamireddy@ratnaglobaltech.com',
        to: mailParams.email,
        subject: 'Email Verification',
        html: htmlContent
      });
      return info.messageId;
    });


    // const info = await transport.sendMail({
    //   from: 'admin@jobportal.com',
    //   to: mailParams.email,
    //   subject: 'Email Confirmation',
    //   html: `Please click <a href=http://localhost:4000/jobSeekerProfile/emailVerify/${mailParams.token}> here </a> to verify your email, Thanks `
    // });

    // return info.messageId;

  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

