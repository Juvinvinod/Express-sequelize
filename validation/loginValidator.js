const { body } = require('express-validator');

// validator function used to check login details
const ValidateLogin = [
  body('phone_number')
    .notEmpty()
    .withMessage('Cannot be empty')
    .isMobilePhone()
    .withMessage('Not a valid number'),
  body('password')
    .notEmpty()
    .withMessage('Cannot be empty')
    .isLength({ min: 4, max: 10 })
    .withMessage('password length must be between 4 & 10')
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/)
    .withMessage('Password must contain both letters and numbers'),
];

module.exports = ValidateLogin;
