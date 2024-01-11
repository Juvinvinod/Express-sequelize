const { body } = require('express-validator');

// validator function used to check login details
const ValidateLogin = [
  body('phone_number')
    .notEmpty()
    .withMessage('Cannot be empty')
    .isMobilePhone()
    .withMessage('Not a valid number')
    .escape(),
  body('password').notEmpty().withMessage('Cannot be empty').escape(),
];

module.exports = ValidateLogin;
