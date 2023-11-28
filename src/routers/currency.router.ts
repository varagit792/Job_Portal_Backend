import { Router } from 'express';
import { getCurrency } from '../controllers/currency.controller';

const currencyRouter = Router();

currencyRouter.get('/get', getCurrency);

export default currencyRouter;
