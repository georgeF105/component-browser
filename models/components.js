var Knex = require('knex');
var knexConfig = require('../knexfile')

var knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

function all() {
 return knex.select().table('components') 
}

module.exports = {
  all: all
}