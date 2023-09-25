import nodemailer from 'nodemailer';
import 'dotenv/config';

export const transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_USER, ////1290--pin
    pass: process.env.NODEMAILER_PASS  //pass key generated by app pass
  }
});