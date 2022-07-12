import { Router } from "express";
import { RegisterUserController } from "../controllers/registerUserController/registerUser.controller";
import { RegisterUserMiddleware } from "../controllers/registerUserController/registerUser.middleware";
import { TokenMiddleware } from "../middlewares/token/token.middleware";

const router = Router();
const registerController = new RegisterUserController();

router.post(
    '/register', 
    TokenMiddleware.validateToken,
    RegisterUserMiddleware.validateBodyRequest, 
    registerController.registerNewUser
)

export default router;