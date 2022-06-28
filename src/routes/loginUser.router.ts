import { Router } from 'express';
import { LoginUserController } from '../controllers/loginUserController/loginUser.controller';
import { LoginUserMiddleware } from '../controllers/loginUserController/loginUser.middleware'

const router = Router();

router.post(
    '/loginUser', 
    LoginUserMiddleware.validatedUser, 
    LoginUserController.loginUserController
);

export default router;