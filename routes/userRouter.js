const express = require('express');

const router = express.Router();

const userController = require('../controller/userController');
const logger = require('../middlewares/logger');
const userValidator = require('../validation/newUser');
const validator = require('../middlewares/validationError');

router.get('/', logger, userController.getAllUsers);
router.post('/', userValidator, validator, userController.createUser);

module.exports = router;
