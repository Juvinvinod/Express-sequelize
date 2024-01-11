const express = require('express');

const router = express.Router();

const userController = require('../controller/userController');
const tokenChecker = require('../middlewares/tokenChecker');

const userValidator = require('../validation/newUser');
const loginValidator = require('../validation/loginValidator');
const spamValidator = require('../validation/spamValidator');
const searchValidator = require('../validation/searchValidator');
const validator = require('../middlewares/validationError');

router.post('/register', userValidator, validator, userController.createUser); // register user in database
router.post('/login', loginValidator, validator, userController.login); // login user
router.post(
  '/spam',
  tokenChecker,
  spamValidator,
  validator,
  userController.reportSpam,
); // report a spam
router.get(
  '/search',
  tokenChecker,
  searchValidator,
  validator,
  userController.search,
); // search for a number

module.exports = router;
