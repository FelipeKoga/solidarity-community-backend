/* eslint-disable new-cap */
import { Router } from 'express';
import UserController from '@controllers/UserController';
import auth from '@middlewares/auth';
import AuthController from '@controllers/AuthController';

const routes = Router();
routes.post('/login', AuthController.authenticate);
routes.post('/register', AuthController.register);

routes.use(auth);
routes.get('/users', UserController.list);

export default routes;