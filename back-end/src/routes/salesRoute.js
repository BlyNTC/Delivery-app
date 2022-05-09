const Router = require('express').Router();
const saleController = require('../controllers/saleController');

Router.post('/', saleController.create);
Router.get('/', saleController.read);
Router.get('/:id', saleController.readOne);
Router.put('/:id', saleController.updateStatus);

module.exports = Router;
