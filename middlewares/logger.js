const logger = (req, res, next) => {
  console.log('request send');
  next();
};

module.exports = logger;
