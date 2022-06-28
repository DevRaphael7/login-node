import { Router } from 'express';
import { LoginUserController } from '../controllers/loginUser.controller';

const router = Router();

router.get('/loginUser', LoginUserController.loginUserController)

export default router;