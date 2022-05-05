const { status, messages } = require('../utils/errorsMessages');

const errorHandler = (err, _req, res, _next) => {
  let { code } = err;
  console.log('ERROR HANDLER', err);
  if (err.message === 'invalid token' || err.message.includes('jwt')) {
    return res.status(status.unauthorized)
    .json({ message: messages.INVALID_TOKEN }); 
  }
  if (err.name.includes('Sequelize')) {
    return res.status(status.conflict).json({ message: err.message });
  }
  if (!code) code = 500;
  res.status(code)
    .json({ message: err.message });
};

module.exports = errorHandler;