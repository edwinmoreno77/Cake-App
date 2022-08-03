


const isValidRole = require('../helpers/db-validators');
const validateJWT = require('../middlewares/validate-jwt');
const validateRole = require('../middlewares/validate-roles');
const validateFields = require('../middlewares/validate-fields');
const fileValidator = require('../middlewares/file-validator');

module.exports = {
    ...isValidRole,
    ...validateJWT,
    ...validateRole,
    ...validateFields,
    ...fileValidator
}