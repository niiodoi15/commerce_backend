import categoryService from '../services/category.service.js';
import ResponseHelper from '../helper/response.js';
import dotenv from 'dotenv';

dotenv.config();

const { createCategoryService, fetchCategoryService } = categoryService;
const { sendResponse } = ResponseHelper;

// eslint-disable-next-line no-undef
const SECRET = process.env.SECRET;

const createCategoryController = async (req, res, next) => {
    try {
        const { name } = req.body;
        const data = await createCategoryService(name);
        return sendResponse(res, data, 'Category created successfully', 201);
    } catch (error) {
        // console.log('Error:', error);
        next(error)
        return sendResponse(res, null, 'Oops.. something broke on the server', 500);
    }
};

const fetchAllCategory = async (req, res, next) => {
    try {
        const result = await fetchCategoryService();
        return res.status(result.code).json(result);
    } catch (error) {
        console.log(error)
        next(error);
    }
};

export default {
    createCategoryController,
    fetchAllCategory
};