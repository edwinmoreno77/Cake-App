const { Router } = require('express');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validate-fields');

const login = require('../controllers/auth');

const router = Router();

router.post('/login', [
    check('email', 'email is require').isEmail(),
    check('password', 'password is require').not().isEmpty(),
    check('password', 'password must contain more than 6 characters').isLength({ min: 6 }),
    validateFields
], login);


module.exports = router;