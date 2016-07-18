var express = require('express');
var router = express.Router();

var components = require('../../models/components')

/* GET home page. */
router.get('/', function(req, res, next) {
  components.all()
    .then(function(components) {
      res.json(components);
    })
});

module.exports = router;