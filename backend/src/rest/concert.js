var express = require('express');
var router = express.Router();
var concert = require('../service/').concert;

router.get('/', concert.list);
router.get('/:id', concert.findById);
router.post('/', concert.create);
router.update('/', concert.update);

module.exports = router;