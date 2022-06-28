import { Router } from "express";
import { RegisterUserController } from "../controllers/registerUserController/registerUser.controller";
import { RegisterUserMiddleware } from "../controllers/registerUserController/registerUser.middleware";

const router = Router();
const registerController = new RegisterUserController();

router.post(
    '/register', 
    RegisterUserMiddleware.validateBodyRequest, 
    registerController.registerNewUser
)

export default router;