import express from 'express';
import productController from '../controllers/product.controller.js';
import productMiddleware from '../middlewares/product.middleware.js';
// import productController from '../controllers/product.controller.js';


const { createProductController, getAllProducts, getProductsByCategory } = productController;
const { InputValidation, checkToken } = productMiddleware;

const router = express.Router();

router.post('/add-product', InputValidation, checkToken, createProductController);
router.get('/', getAllProducts);
router.get('/:id',  getProductsByCategory);

export default router;
