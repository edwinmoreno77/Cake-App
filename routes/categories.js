const { Router } = require('express');
const { check } = require('express-validator');

const {
    getAllCategories,
    createCategory,
    getCategoryById,
    updateCategory,
    deleteCategory } = require('../controllers/categories');

const {
    validateJWT,
    validateFields,
    categoryExistsById } = require('../middlewares');


const router = Router();

//get all getAllCategories

router.get('/', getAllCategories);

//get one category by id - public route

router.get('/:id', [
    check('id', 'invalid id').isMongoId(),
    check('id').custom(categoryExistsById),
    validateFields,
], getCategoryById);

//create category - private - users with valaid token

router.post('/', [
    validateJWT,
    check('name', 'name is required').not().isEmpty(),
    validateFields
], createCategory);

//update category - private - users with valaid token

router.put('/:id', [
    check('id', 'invalid id').isMongoId(),
    check('name', 'name is required').not().isEmpty(),
    validateFields,
], updateCategory);

//delete category - private - only admin

router.delete('/:id', [
    check('id', 'invalid id').isMongoId(),
    validateFields,
], deleteCategory);



module.exports = router;