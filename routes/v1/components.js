var express = require('express');
var router = express.Router();

var components = require('../../models/components')

/* GET home page. */
router.get('/', function(req, res, next) {
  components.all()
    .then(function(components) {
      res.json(components);
    })
    .catch(function(err) {
    	res.send(err)
    })
});

/* GET home page. */
router.get('/:id', function(req, res, next) {
  components.componentInfo(req.params.id)
    .then(function(components) {
      res.json(components);
    })
    .catch(function(err) {
    	res.send(err)
    })
});

module.exports = router;