


const isValidRole = require('../helpers/db-validators');
const validateJWT = require('../middlewares/validate-jwt');
const validateRole = require('../middlewares/validate-roles');

module.exports = {
    ...isValidRole,
    ...validateJWT,
    ...validateRole
}