const { sequelize } = require('../models');

const db = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected!');
  } catch (error) {
    console.log('Database connection Error!!', error);
  }
};

module.exports = db;
