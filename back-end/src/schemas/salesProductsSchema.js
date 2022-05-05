const Joi = require('joi');

module.exports = Joi.object({
  sale: Joi.object({
    userId: Joi.number().required(),
    sellerId: Joi.number().required(),
    totalPrice: Joi.number().required(),
    deliveryAddress: Joi.string().required(),
    deliveryNumber: Joi.string().required(),
    status: Joi.string().required(),
  }),
  saleProducts: Joi.array().items(Joi.object({
      name: Joi.string().required(),
      id: Joi.number().required(),
      price: Joi.number().required(),
      qty: Joi.number().required(),
  })).required(),
});
