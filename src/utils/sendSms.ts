import { Twilio } from 'twilio';
import { MessageListInstanceCreateOptions } from 'twilio/lib/rest/api/v2010/account/message';
import('dotenv/config');

export const sendSMS = async (msgData: MessageListInstanceCreateOptions) => {
  try {
    const accountSid: string = process.env.TWILIO_ACCOUNT_ID || "";
    const token: string = process.env.TWILIO_AUTH_TOKEN || "";
    const twilioClient = new Twilio(accountSid, token);

    const message = await twilioClient.messages.create({
      body: msgData.body,
      // from:'+14245436115',
      from:'+16186134928',
      to: msgData.to,
    });

    console.log('sent msg', message?.sid);
    return message?.sid;
  } catch (error) {
    console.log('error', error);
    throw error;
  }

}



