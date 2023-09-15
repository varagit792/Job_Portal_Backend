import { transport } from '../config/nodemailer';

export const sendEmail = async (reqBody: any) => {
  try {
    console.log('email body', reqBody);
    const info = await transport.sendMail({
      from: 'admain@jobportal.com',
      to: reqBody.email,
      subject: reqBody.subject,
      text: reqBody.mailBody
    });

    console.log('info id ', info);
    return info.messageId;

  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

