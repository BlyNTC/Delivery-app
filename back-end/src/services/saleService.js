const { Sale, Product } = require('../database/models');
const { createMany } = require('./salesProductService');

const create = async (body) => {
  const newSale = await Sale.create({ dateSale: new Date(), ...body.sale });
  const insertedSaleProducts = await createMany(newSale.id, body.saleProducts);
  return insertedSaleProducts;
};

const read = async () => {
  const readSale = await Sale
    .findAll({ include: [{ model: Product, as: 'products', through: { attributes: [] } }] });
  return readSale;
};

const readOne = async (id) => {
  const readOneSale = await Sale.findOne({
    where: { id },
    include: [{ model: Product, as: 'products', through: { attributes: [] } }],
  });
  return readOneSale;
};

const finishOne = async (id) => {
  const updateOneSale = await Sale.update({ status: 'ENTREGUE' }, {
    where: { id },
  });
  return updateOneSale;
};

module.exports = { read, create, readOne, finishOne };
