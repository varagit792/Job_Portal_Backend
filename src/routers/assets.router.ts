import { Router } from "express";
const assetsRouter = Router();
import { getPngAsset } from "../controllers/assets.controller";

assetsRouter.get('/png/:iconName',getPngAsset);

export default assetsRouter;
