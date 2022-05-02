const { Router } = require('express');

const login = require('./loginRouter');
const register = require('./registerRouter');
const token = require('./loadingRouter');
const product = require('./productRouter');
const sales = require('./salesRoute'); 

const router = Router();

router.use('/login', login);
router.use('/register', register);
router.use('/loading/session', token);
router.use('/customer/products', product);
router.use('/customer/orders', sales);

module.exports = router;
