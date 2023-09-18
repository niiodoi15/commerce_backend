import productService from '../services/product.service.js';
import ResponseHelper from '../helper/response.js';
import dotenv from 'dotenv';

dotenv.config();

const { createProductService, getAllProductService, fetchProductsByCategory  } = productService;
const { sendResponse } = ResponseHelper;

// eslint-disable-next-line no-undef
// const SECRET = process.env.SECRET;

const createProductController = async (req, res) => {
    try {
        const { name, price, quantity, category_id } = req.body;
        const data = await createProductService(name, price, quantity, category_id);
        return sendResponse(res, data, 'Product created successfully', 201);
    } catch (error) {
        console.log('Error:', error.message);
        return error.message.includes('duplicate')
            ? sendResponse(res, null, 'Product already exists!', 500)
            : sendResponse(res, null, 'Oops.. something broke on the server!', 500);
    }
};

const getAllProducts = async (req, res, next) => {
    try {
        const result = await getAllProductService();
        return res.status(result.code).json(result);
    } catch (error) {
        next(error);
    }
};

const getProductsByCategory = async (req, res, next) => {
    try {
        const { id } = req.params;

        const response = await fetchProductsByCategory(id);
        return res.status(response.code).json(response);
    } catch (error) {
        return next(error);
    }
};



export default {
    createProductController,
    getAllProducts,
    getProductsByCategory
};