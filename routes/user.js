import express from 'express';
import UserController from '../controllers/user.controller.js';
import ValidationMiddleware from '../middlewares/validation.middleware.js';
import AuthMiddleware from '../middlewares/auth.middleware.js';

const { createUserController, loginController } = UserController;
const { createUserInputValidation } = ValidationMiddleware;
const { checkIfUserExists, checkPassword } = AuthMiddleware;

const router = express.Router();

router.post('/signup', createUserInputValidation, createUserController);
router.post('/auth', checkIfUserExists, checkPassword, loginController);

export default router;
