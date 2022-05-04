const Router = require('express').Router();
const saleController = require('../controllers/saleController');

Router.post('/', saleController.create);
Router.get('/', saleController.read);

module.exports = Router;
