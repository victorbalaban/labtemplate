var express = require('express');
var router = express.Router();
var sport = require('../service/').sport;

router.get('/', sport.list);
router.get('/:id', sport.findById);
router.post('/', sport.create);
router.put('/', sport.update);
router.delete('/:id', sport.delete);

module.exports = router;