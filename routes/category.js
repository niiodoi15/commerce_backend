import express from 'express';
import categoryController from '../controllers/categoryController.js';
import categoryMiddleware from '../middlewares/category.middleware.js';


const { createCategoryController, fetchAllCategory } = categoryController;
const { categoryInputValidation } = categoryMiddleware;

const router = express.Router();

router.post('/add', categoryInputValidation, createCategoryController);
router.get('/', fetchAllCategory);

export default router;
