const md5 = require('md5');
const { User } = require('../database/models');

const create = async (body) => {
  const { name, email, password } = body;
  const user = await User
    .create({ name, email, password: md5(password), role: 'customer', raw: true });
  if (user) return { message: 'Created' };
};

module.exports = { create };