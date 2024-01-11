const { sequelize, User, Contact } = require('../models');

// check if a token is passed,if passed then verify and then pass to next function
const verifyToken = async (req, res, next) => {
  try {
    const bearerHeader = req.headers.authorization;
    if (!bearerHeader) {
      return res.status(401).json({
        status: 'failed',
        message: 'Invalid token!',
      });
    }
    const token = bearerHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({
        status: 'failed',
        message: 'Invalid token!',
      });
    }
    const tokenExists = await User.findOne({
      where: {
        token,
      },
    });
    if (!tokenExists) {
      return res.status(401).json({
        status: 'failed',
        message: 'Invalid token!',
      });
    }
    req.body.user_id = tokenExists.id;
    next();
  } catch (error) {
    return res.status(500).json({
      status: 'failed',
      message: 'Database error',
      data: '',
    });
  }
};

module.exports = verifyToken;
