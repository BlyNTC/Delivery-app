const { Product } = require('../database/models');

const read = async () => {
  const products = await Product.findAll({ raw: true });
  return products;
};

module.exports = { read };