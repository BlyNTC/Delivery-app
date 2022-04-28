const Router = require('express').Router();
const { verifyToken } = require('../middlewares/tokenMiddleware');

Router.post('/', verifyToken);

module.exports = Router;