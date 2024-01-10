const { validationResult } = require('express-validator');

const validateRequest = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.status(422).send({
      status: 'error',
      errors: error.array(),
    });
  } else {
    next();
  }
};

module.exports = validateRequest;
