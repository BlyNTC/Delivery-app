const { User } = require('../models');
const md5 = require('md5');

const create = async (body) => {
  const user = await User.create(body);
  return { status: 201, content: user };
}

module.exports = {
  create,
};