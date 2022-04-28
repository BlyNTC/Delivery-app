const Router = require('express').Router();
const Controller = require('../controllers/userController');

Router.post('/', Controller.create);

module.exports = Router;