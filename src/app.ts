import express, { Express, NextFunction, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import router from './router';
import { errorHandler } from './middlewares/errorHandler';
import { AppDataSource } from './config/typeorm';
import passport from 'passport';
import session from 'express-session';
import { runSeeders } from 'typeorm-extension';
import logger from 'morgan';
import 'dotenv/config';
import path from 'path';

(async () => {
  AppDataSource.initialize().then(() => {
    console.log('Db connected');
    runSeeders(AppDataSource);
  }).catch((error) => {
    console.log('Unable to connect to database ', error)
  });

})();

const app: Express = express();

const corsOptions = {
  origin: 'http://localhost:3000', // Replace with the actual URL of your React app
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
// Google Auth and Facebook Auth
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRETEVENTS'
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: true, limit: process.env.FILE_LIMIT }));
app.use(bodyParser.json());
app.use(logger('dev'));

//serve the local files of resume and profile in frontend.
app.use('/uploadResume', express.static(path.resolve(__dirname, `..${path.sep}uploadResume`)));
app.use('/uploadProfilePicture', express.static(path.resolve(__dirname, `..${path.sep}uploadProfilePicture`)));
//parent router
app.use(router);

/// catch 404 and forward to error handler
app.use((req, res, next: NextFunction) => {
  const err = new Error('Invalid API service');
  next(err);
});

app.use(errorHandler)

export default app;

