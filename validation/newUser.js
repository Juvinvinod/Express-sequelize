const { body } = require('express-validator');

const newUser = [
  body('first_name').notEmpty().withMessage('Cannot be empty').escape(),
  body('phone_number')
    .notEmpty()
    .withMessage('Cannot be empty')
    .isMobilePhone()
    .withMessage('Not a phone number'),
];

module.exports = newUser;
