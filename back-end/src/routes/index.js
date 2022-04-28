const { Router } = require('express');

const login = require('./loginRouter');
const register = require('./registerRouter');
const token = require('./loadingRouter');

const router = Router();

router.use('/login', login);
router.use('/register', register);
router.use('/loading/session', token);

module.exports = router;
