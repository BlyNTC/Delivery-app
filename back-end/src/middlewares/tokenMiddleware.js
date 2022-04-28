const { throwError } = require('../utils/errors');
const { status, messages } = require('../utils/errorsMessages');
const rescue = require('express-rescue');
const jwt = require('../utils/jwt');

const verifyToken = rescue((req, res) => {
  const token = req.headers.authorization;
  if (token === undefined || token === '') {
    return throwError(status.unauthorized, messages.TOKEN_NOT_FOUND);
  }
  const verified = jwt.validateJWT(token);
  if (!verified) throwError(status.unauthorized, messages.INVALID_TOKEN);
  res.status(status.ok).end();
});

module.exports = {
  verifyToken,
}
