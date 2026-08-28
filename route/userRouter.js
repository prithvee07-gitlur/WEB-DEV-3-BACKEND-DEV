const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/',userController.getAllUser);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updatedUser);
router.delete('/:id',userController.deleteUserbyId)
module.exports = router;