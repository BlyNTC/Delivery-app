const { SalesProducts } = require('../database/models');

const read = async () => {
  const salesProduts = await SalesProducts.findAll({ raw: true });
  return salesProduts;
};

const createMany = async (saleId, products) => {
  await SalesProducts.bulkCreate(products
    .map((saleProduct) => ({
      saleId,
      productId: saleProduct.id,
      quantity: saleProduct.qty,
    })));
  return saleId;
};

module.exports = { read, createMany };