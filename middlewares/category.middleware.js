import ResponseHelper from '../helper/response.js';

const { sendResponse } = ResponseHelper;

const categoryInputValidation = (req, res, next) => {
    try {
        const { name } = req.body;
        if (typeof name !== 'string' || name.trim() === '') {
            return sendResponse(res, null, 'Category must be a text', 400);
        }

        return next();
    } catch (error) {
        return next(error);
    }
};

export default {
    categoryInputValidation,
};
