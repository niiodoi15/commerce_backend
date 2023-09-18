import { db } from '../db/db.js';
import ResponseHelper from '../helper/response.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
// import { defaults } from 'pg';

const { sendResponse } = ResponseHelper;

dotenv.config();

const SECRET = process.JWT_SECRET_KEY;
const checkToken = (req, res, next) => {
    try {
        const token = req.headers['authorization'];
        if (!token) {
            return res.status(400).json({
                status: 'error',
                code: 401,
                message: 'You are not logged in!',
                data: null,
            });
        }
        const user = jwt.verify(token, SECRET);
        if (!user) {
            return res.status(400).json({
                status: 'error',
                code: 401,
                message: 'You are not authorized to make this request!',
                data: null,
            });
        }
        req.user = user;
        return next();
    } catch (error) {
        return next(error);
    }
};

const InputValidation = (req, res, next) => {
    try {
        const { name, price, quantity } = req.body;
        if (typeof name !== 'string' || email.trim() === '') {
            return sendResponse(res, null, 'Product name is required', 400);
        }

        if (typeof price !== 'number'|| price.trim() === '' ){
            return sendResponse(res, null, 'Price is required', 400);
        }

        if (typeof quantity !== 'integer' || quantity.trim() === '') {
            return sendResponse(res, null, 'Quantity is required', 400);
        }

        return next();
    } catch (error) {
        return next(error);
    }
};

export default {
    InputValidation,
    checkToken
};
