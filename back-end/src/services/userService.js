const md5 = require('md5');
const { User } = require('../database/models');
const { jwtSign } = require('../utils/jwt');

const create = async (body) => {
  const { name, email, password } = body;
  const role = 'customer';
  const userData = await User
    .create({ name, email, password: md5(password), role });
  if (userData) {
    const user = {
      id: userData.dataValues.id,
      name,
      email,
      role,
    }
    return { ...user, token: jwtSign(user, `${process.cwd()}/jwt.evaluation.key)`) };
  }
};

module.exports = { create };
