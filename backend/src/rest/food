var express = require('express');
var router = express.Router();
var food = require('../service/').food;

router.get('/', food.list);
router.get('/:id', food.findById);
router.post('/', food.create);
router.update('/', food.update);

module.exports = router;