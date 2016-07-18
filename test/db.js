var components = require('../models/components')
var test = require('tape')

test('Test works', function(t) {
	t.ok(1, 'test works')
	t.end()
})

test('Get components from db', function(t) {
	components.all()
		.then(function(data){
			console.log(data)
			t.ok(1, 'Got data')
		})
		.catch(function(error){
      t.ok(false, error)
    })
	t.end()
})

test('Get component from db', function(t) {
	components.component(1)
		.then(function(data){
			console.log(data)
			t.ok(1, 'Got data')
		})
		.catch(function(error){
      t.ok(false, error)
    })
	t.end()
})

test('Get sub-components from db', function(t) {
	components.subComponent(2)
		.then(function(data){
			console.log(data)
			t.ok(1, 'Got data')
		})
		.catch(function(error){
      t.ok(false, error)
    })
	t.end()
})