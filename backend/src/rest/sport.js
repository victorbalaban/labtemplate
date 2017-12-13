var express = require('express');
var router = express.Router();
var sport = require('../service/').sport;

router.get('/', sport.list);
router.get('/:id', sport.findById);
router.post('/', sport.create);
router.update('/', sport.update);

module.exports = router;