const { Router } = require('express');
const { check } = require('express-validator');

const { isValidRole,
    validateJWT,
    isAdminRole,
    allowedRole } = require('../middlewares');

const { validateFields, emailExists, userExistsById } = require('../middlewares/validate-fields');
const { userGet, userPut, userPost, userPatch, userDelete } = require('../controllers/user');

const router = Router();

router.get('/', userGet);

router.put('/:id', [
    check('id', 'invalid id').isMongoId(),
    check('id').custom(userExistsById),
    check('role').custom(isValidRole),
    validateFields
], userPut);

router.post('/', [
    check('name', 'name must be at least 3 characters').isLength({ min: 3 }),
    check('email').custom(emailExists),
    check('password', 'password must be at least 6 characters').isLength({ min: 6 }),
    check('role').custom(isValidRole),
    validateFields
], userPost);

router.patch('/', userPatch);

router.delete('/:id', [
    validateJWT,
    // isAdminRole,//TODO: Uncomment this line to enable delete function for admin role only
    allowedRole('ADMIN_ROLE', 'SALES_ROLE'),
    check('id', 'invalid id').isMongoId(),
    check('id').custom(userExistsById),
    validateFields
], userDelete);


module.exports = router;