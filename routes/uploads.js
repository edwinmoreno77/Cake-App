const { Router } = require('express');
const { check } = require('express-validator');
const { fileUpload } = require('../controllers/uploads');

const { validateFields } = require('../middlewares/validate-fields');

const router = Router();


router.post('/', fileUpload)


module.exports = router;