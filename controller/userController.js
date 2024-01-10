const { matchedData } = require('express-validator');

const getAllUsers = (req, res) =>
  res.status(200).json({
    status: 'Success',
    data: {
      first_name: 'asd',
      last_name: 'asfdf',
      phone_number: 213768,
    },
  });

const createUser = (req, res) => {
  const data = matchedData(req);
  console.log(data);
};

module.exports = {
  getAllUsers,
  createUser,
};
