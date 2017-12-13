var express = require('express');
var router = express.Router();
var pub = require('../service/').pub;

router.get('/', pub.list);
router.get('/:id', pub.findById);
router.post('/', pub.create);
router.update('/', pub.update);

module.exports = router;