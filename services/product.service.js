import { db } from '../db/db.js';
import productQueries from '../queries/product.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const { createProducts, getProducts, getProductsByCategory } = productQueries;

const createProductService = async (name, price, quantity, category_id) => {
    return db.one(createProducts, [name, price, quantity, category_id]);
};

const getAllProductService = async () => {
    return db.manyOrNone(getProducts);
};

const fetchProductsByCategory = async (id) => {
    return db.manyOrNone(getProductsByCategory, [id]);

};







export default {
    createProductService,
    getAllProductService,
    fetchProductsByCategory

};