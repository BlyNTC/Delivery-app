const { User } = require('../database/models');
const md5 = require('md5');

const create = async (body) => {
  const { name, email, password } = body;
  const user = await User.create({ name, email, password: md5(password) });
  if(user.dataValues) return { message: 'Created' };
}

module.exports = { create };