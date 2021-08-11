import {Router} from 'express'
import { UserController } from './users.controller';

const userRouter = Router();
const controller = new UserController();

userRouter.get('/', controller.getUsers);

export default userRouter;