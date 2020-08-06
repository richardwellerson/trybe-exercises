const boom = require('boom');

const BoomErrorHandler = (error, _req, res, next) => {
  if (!boom.isBoom(error)) return next(error);
  return res.status(error.output.statusCode).json({ message: error.message });
};

module.exports = BoomErrorHandler;
