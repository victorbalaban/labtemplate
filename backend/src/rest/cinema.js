var express = require('express');
var router = express.Router();
var cinema = require('../service/').cinema;

router.get('/', cinema.list);
router.get('/:id', cinema.findById);
router.post('/', cinema.create);
router.update('/', cinema.update);

module.exports = router;