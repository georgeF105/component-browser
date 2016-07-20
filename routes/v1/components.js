var express = require('express');
var router = express.Router();

var partDb = require('../../models/db')
var getAllPartInfo = require('../../models/getAllPartInfo')

/* GET home page. */
router.get('/', function(req, res, next) {
  partDb.all()
    .then(function(components) {
      res.json(components);
    })
    .catch(function(err) {
    	res.send(err)
    })
});

/* GET home page. */
router.get('/:id', function(req, res, next) {
  getAllPartInfo(req.params.id)
    .then(function(partInfo) {
      res.json(partInfo);
    })
    .catch(function(err) {
    	res.send(err)
    })
});

module.exports = router;