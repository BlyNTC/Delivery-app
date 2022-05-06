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

const verify = async (body) => {
  const { name } = body;
  const users = await User.findAll({ where: { name } });
  console.log(users);
  return users.length > 0;
};

module.exports = { create, verify };