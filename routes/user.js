const { Router } = require('express');
const { userGet, userPut, userPost, userPatch, userDelete } = require('../controllers/user');

const router = Router();

router.get('/', userGet);

router.put('/:id', userPut);

router.post('/', userPost);

router.patch('/', userPatch);

router.delete('/', userDelete);


module.exports = router;