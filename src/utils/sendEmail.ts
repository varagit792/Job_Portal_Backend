import { transport } from '../config/nodemailer';

export const sendEmailVerifyLink = async (mailParams:any) => {
  try {
    
    const info = await transport.sendMail({
      from: 'admin@jobportal.com',
      to: mailParams.email,
      subject: 'Email Confirmation',
      html: `Please click <a href=http://localhost:4000/jobSeekerProfile/emailVerify/${mailParams.token}> here </a> to verify your email, Thanks `
    });

    return info.messageId;

  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

