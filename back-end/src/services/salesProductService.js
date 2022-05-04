// const salesService = require('./salesProductService');
const { SalesProducts } = require('../database/models');

const read = async () => {
  const salesProduts = await SalesProducts.findAll({ raw: true });
  return salesProduts;
};

const createMany = async () => {
  // const createdSale = await salesService.create(reqBody.sale);
  // const createdSaleProducts = await SalesProducts.bulkCreate(reqBody.salesProducts
  //   .map((saleProduct) => ({
  //     saleId: 1,
  //     productId: saleProduct.id,
  //     quantity: saleProduct.qty,
  //   })));
  // return createdSaleProducts;
  const message = { message: 'aqui' };
  return message;
};

module.exports = { read, createMany };