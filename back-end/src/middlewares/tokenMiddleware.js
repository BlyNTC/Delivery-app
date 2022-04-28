const { throwError } = require('../utils/errors');
const { status, messages } = require('../utils/errorsMessages');
const rescue = require('express-rescue');

const verifyToken = rescue((req, res, next) => {
  const token = req.headers.authorization;
  if (token === undefined || token === '') {
    return throwError(status.unauthorized, messages.TOKEN_NOT_FOUND);
  }
  const verified = jwt.validateJWT(token, `${process.cwd()}/jwt.evaluation.key)`);
  if (!verified) throwError(status.unauthorized, messages.INVALID_TOKEN)
  next();
});

module.exports = {
  verifyToken,
}