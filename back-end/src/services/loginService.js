const md5 = require('md5');
const { User } = require('../database/models');

const err = require('../utils/errors');

const { messages, status } = require('../utils/errorsMessages');
const { jwtSign } = require('../utils/jwt');

const loginService = async (reqBody) => {
  const findUser = await User.findOne({
    where: {
      email: reqBody.email,
      password: md5(reqBody.password),
    },
    attributes: { exclude: ['password'] },
    raw: true,
  });
  if (findUser) {
    return { ...findUser, token: jwtSign(findUser) };
  }
  err.throwError(status.notFound, messages.USER_NOT_EXISTS);
};

module.exports = {
  loginService,
};
