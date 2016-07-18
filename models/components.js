var Knex = require('knex');
var knexConfig = require('../knexfile')

var knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

function all() {
 return knex.select().table('components') 
}

function component(id) {
	return knex('components').where({id})
}

function subComponent(assmId) {
	return knex.from('bomJoin').where({assmId}).innerJoin('components', 'bomJoin.partId', 'components.id')
}

module.exports = {
  all,
  component,
  subComponent
}