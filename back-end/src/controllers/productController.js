const rescue = require('express-rescue');
const Service = require('../services/productService');
const { status } = require('../utils/errorsMessages');

const read = rescue(
  async (_req, res) => {
    const user = await Service.read();
    return res.status(status.ok).json(user);
  },
);

module.exports = { read };
