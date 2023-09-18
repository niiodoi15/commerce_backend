import { db } from '../db/db.js';
import categoryQueries from '../queries/user.js';

const { createCategory, getAllCategory } = categoryQueries;

const createCategoryService = async (name) => {
    return db.one(createCategory, [name]);
};

const fetchCategoryService = async () => {
    return db.manyOrNone(getAllCategory);
};





export default {
    createCategoryService,
    fetchCategoryService
};