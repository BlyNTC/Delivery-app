const md5 = require('md5');
const { User } = require('../database/models');

const create = async (body) => {
  const { password } = body;
  const userData = await User.create({
    ...body,
    password: md5(password),
  });
  return userData;
};

module.exports = { create };