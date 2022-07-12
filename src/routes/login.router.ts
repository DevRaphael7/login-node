import { Router } from 'express'
import { LoginController } from '../controllers/loginController/login.controller';
import { LoginMiddleware } from '../controllers/loginController/login.middleware';

const router = Router();
const loginController: LoginController = new LoginController();

router.post(
    '/login',
    LoginMiddleware.validateAuthorized,
    loginController.loginController
)

export default router;