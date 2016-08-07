var getAllPartInfo = require('../models/getAllPartInfo')
var test = require('tape')

test('Get all part info test works', function (t) {
  t.ok(1, 'test works')
  t.end()
})

test('Get all part info', function (t) {
  var expected = {
    part: {id: 1, name: ''},
    subParts: []
  }

  getAllPartInfo(1)
    .then(function (data) {
      console.log('data', data)
      t.equal(data.part.id, expected.part.id, 'Actual = expected')
    })
    .catch(function (error) {
      t.ok(false, error)
    })
  t.end()
})
