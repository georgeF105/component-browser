var express = require('express');
var router = express.Router();

var partDb = require('../../models/db')

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
  partDb.partInfo(req.params.id)
    .then(function(components) {
      res.json(components);
    })
    .catch(function(err) {
    	res.send(err)
    })
});

module.exports = router;