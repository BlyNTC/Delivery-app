const { Router } = require('express');

const login = require('./loginRouter');
const register = require('./registerRouter');

const router = Router();

router.use('/login', login);
router.use('/register', register);

module.exports = router;
