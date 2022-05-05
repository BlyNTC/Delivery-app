const { Sale, SalesProducts } = require('../database/models');
const { createMany } = require('./salesProductService');

const create = async (body) => {
  const newSale = await Sale.create({ dateSale: new Date(), ...body.sale });
  const insertedSaleProducts = await createMany(newSale.id, body.saleProducts);
  return insertedSaleProducts.dataValues;
};

const read = async () => {
  const readSale = await Sale
    .findAll({ 
      attributes: { exclude: ['user_id', 'seller_id'] },
      include: [{ 
        model: SalesProducts,
        as: 'SalesProducts',
        attributes: { exclude: ['product_id', 'sale_id'] } }] });
  
  return readSale;
};

const readOne = async (id) => {
  const readOneSale = await Sale.findOne({
    where: { id },
    attributes: { exclude: ['user_id', 'seller_id'] },
    include: [{
      model: SalesProducts,
      as: 'SalesProducts',
      attributes: { exclude: ['product_id', 'sale_id'] },
    }],
  });
  return readOneSale;
};

module.exports = { read, create, readOne };
