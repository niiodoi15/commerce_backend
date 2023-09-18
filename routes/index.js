import express from 'express';
import userRoutes from './user.js';
import categoryRoutes from './category.js';
import productRoutes from './product.js';


const router = express.Router();

router.use('/users', userRoutes);
router.use('/category', categoryRoutes);
router.use('/product', productRoutes);

export default router;
