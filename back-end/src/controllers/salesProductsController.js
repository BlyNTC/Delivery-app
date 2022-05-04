const rescue = require('express-rescue');
const Service = require('../services/salesProductService');
const { status } = require('../utils/errorsMessages');

const read = rescue(async (_req, res) => {
  const user = await Service.read();
  res.status(status.ok).json(user);
});

const createMany = rescue(async (req, res) => {
  const { salesProducts } = req.body;
  const createdSalesProducts = await Service.createMany(salesProducts);
  res.status(status.created).json(createdSalesProducts);
});

module.exports = { read, createMany };
