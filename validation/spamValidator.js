const { body } = require('express-validator');

// validator function used to check contact id details used for reporting spam
const ValidateSpam = [
  body('contact_id')
    .notEmpty()
    .withMessage('Cannot be empty')
    .isNumeric()
    .withMessage('Must be a number'),
  body('user_id').notEmpty().withMessage('Cannot be empty'),
];

module.exports = ValidateSpam;
