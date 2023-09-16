import { Router } from 'express';
import { getBoard } from '../controllers/board.controller';

const boardRouter = Router();

boardRouter.get('/get', getBoard);

export default boardRouter;