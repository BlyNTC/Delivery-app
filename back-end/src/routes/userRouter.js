const Router = require('express').Router();
const Controller = require('../controllers/userController');

Router.get('/', Controller.read);
Router.get('/:id', Controller.readById);

module.exports = Router;