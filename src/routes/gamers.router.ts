import { Router } from "express";
import { GamerController } from "../controllers/gamersController/gamer.controller";
import { GamerRepository } from "../repository/gamersRepository/gamer.repository";

const router = Router();

const controller: GamerController = new GamerController();

router.get('/gamers', GamerController.getGamers)


export default router;