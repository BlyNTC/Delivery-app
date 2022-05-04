const { Sale } = require('../database/models');

const create = async(body) => {
  const newSale = await Sale.create(body);
  return newSale.dataValues;
};

const read = async () => {
  const readSale = await Sale.findAll();
  return readSale;
};

module.exports = { read, create };
