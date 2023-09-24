import { Express, Request } from 'express';
import multer, { FileFilterCallback } from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export const storageResume = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, `..${path.sep}..${path.sep}uploadResume`));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = uuidv4();

    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)) // Appending extension;
  }
});

export const storageProfilePicture = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, `..${path.sep}..${path.sep}uploadProfilePicture`));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = uuidv4();

    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)) // Appending extension;
  }
});
export const fileFilterDocument = (req: Request, file: Express.Multer.File, cb: FileFilterCallback): void => {
  if (file.mimetype === "application/pdf" || file.mimetype === "application/msword" || file.mimetype === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    || file.mimetype === "application/x-abiword") {
    cb(null, true)
  } else {
    cb(null, false);
    cb(new Error("Filetype accepted are pdf, doc, docx"));
  }
}

export const fileFilterImage = (req: Request, file: Express.Multer.File, cb: FileFilterCallback): void => {
  if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg"
    || file.mimetype === "image/gif") {
    cb(null, true)
  } else {
    cb(null, false);
    cb(new Error("Filetype accepted are png, jpg, jpeg, gif"));
  }
}

