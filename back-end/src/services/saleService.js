const { Sale } = require('../database/models');

const read = async () => {
  const readSale = await Sale.findAll();
  return readSale;
};

module.exports = { read };
