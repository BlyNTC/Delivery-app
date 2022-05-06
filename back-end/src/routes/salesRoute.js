const Router = require('express').Router();
const saleController = require('../controllers/saleController');

Router.post('/', saleController.create);
Router.get('/', saleController.read);
Router.get('/:id', saleController.readOne);
Router.patch('/:id', saleController.finishOne);

module.exports = Router;
