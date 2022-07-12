import { Router } from 'express';
import { LoginUserController } from '../controllers/loginUserController/loginUser.controller';
import { LoginUserMiddleware } from '../controllers/loginUserController/loginUser.middleware'
import { TokenMiddleware } from '../middlewares/token/token.middleware';

const router = Router();

router.post(
    '/loginUser', 
    TokenMiddleware.validateToken,
    LoginUserMiddleware.validateBody, 
    LoginUserController.loginUserController
);

export default router;