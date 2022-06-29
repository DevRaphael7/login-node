import { Router } from 'express'
import { LoginController } from '../controllers/loginController/login.controller';

const router = Router();
const loginController: LoginController = new LoginController();

router.post(
    '/login',
    loginController.loginController
)

export default router;