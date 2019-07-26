const { Router } = require('express');
const controller = require('./expense.controller');
const router = new Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);

module.exports = router;