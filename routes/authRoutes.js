const express = require('express');
const authrRouter = express.Router();
const authController = require('../controller/authController');

authrRouter.post('/register', authController.registerUser);
authrRouter.post('/login', authController.loginUser);

module.exports = authrRouter;