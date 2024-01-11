const { query, oneOf } = require('express-validator');

// validator function used to check search details
const validateSearch = [
  query('name')
    .trim()
    .isString()
    .withMessage('Must be a string')
    .notEmpty()
    .withMessage('Cannot be empty')
    .escape()
    .optional(),
  query('number')
    .trim()
    .notEmpty()
    .withMessage('Cannot be empty')
    .isMobilePhone()
    .withMessage('Not a valid number')
    .escape()
    .optional(),
  query('page')
    .trim()
    .notEmpty()
    .withMessage('Cannot be empty')
    .isNumeric()
    .withMessage('must be a number'),
  query('pageSize')
    .trim()
    .notEmpty()
    .withMessage('Cannot be empty')
    .isNumeric()
    .withMessage('must be a number'),
];

module.exports = validateSearch;
