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
    if (process.env.RUN_SEEDS === 'true') {
      runSeeders(AppDataSource);
    }
  }).catch((error) => {
    console.log('Unable to connect to database ', error)
  });

})();

const app: Express = express();

// redisClient.on('error', (err) => console.log('Error while connecting to redis ', err));
// redisClient.connect().then(() => console.log('connected to redis'));

const corsOptions = {
  origin: true, // Replace with the actual URL of your React app
  // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  // optionsSuccessStatus: 204,
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

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});
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

