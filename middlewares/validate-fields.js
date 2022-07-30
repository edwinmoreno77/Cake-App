const { validationResult } = require('express-validator');
const { Category } = require('../models');
const User = require('../models/user');


const validateFields = (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    next();

}

const emailExists = async (email) => {

    const emailExist = await User.findOne({ email });

    if (emailExist) {
        throw new Error(`Email ${email} already exists`);
    }

}

const userExistsById = async (id) => {

    const idExist = await User.findById(id);

    if (!idExist) {
        throw new Error(`ID:${id} does not exist`);
    }

}

const categoryExistsById = async (id) => {

    const idExist = await Category.findById(id);

    if (!idExist) {
        throw new Error(`ID:${id} does not exist`);
    }

}


module.exports = {
    validateFields,
    emailExists,
    userExistsById,
    categoryExistsById
}