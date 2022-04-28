const { status, messages } = require('../utils/errorsMessages');

const errorHandler = (err, _req, res, _next) => {
  let { code } = err;
  if (err.message === 'invalid token' /* || err.message.includes('jwt') */) {
    return res.status(401)
    .json({ message: 'Expired or invalid token' }); 
  }
  if (err.name.includes('Sequelize')) {
    return res.status(status.conflict).json({ message: messages.USER_REGISTERED });
  }
  if (!code) code = 500;
  console.log('ERROR HANDLER', err);
  res.status(code)
    .json({ message: err.message });
};

module.exports = errorHandler;