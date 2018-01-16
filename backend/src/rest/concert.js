var express = require('express');
var router = express.Router();
var concert = require('../service/').concert;

router.get('/', concert.list);
router.get('/:id', concert.findById);
router.post('/', concert.create);
router.put('/', concert.update);
router.delete('/:id', concert.delete);

module.exports = router;