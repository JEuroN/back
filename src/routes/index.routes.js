const {Router} = require('express');
const router = Router();

router.use('/', require('./ejemplo.routes'))

module.exports = router;