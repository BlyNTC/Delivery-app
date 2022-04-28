const { status } = require('../utils/errorsMessages');
const errorHandler = (err, _req, res, _next) => {
  let { code } = err;
  if (err.message === 'invalid token' || err.message.includes('jwt')) {
    return res.status(status.unauthorized)
    .json({ message: 'Expired or invalid token' }); 
  }
  if (!code) code = status.internalServerError;
  console.log('ERROR HANDLER', err);
  res.status(code)
    .json({ message: err.message });
};

module.exports = errorHandler;