var Knex = require('knex')
var knexConfig = require('../knexfile')

var knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

function all () {
  return knex.select().table('components')
}

function part (id) {
  return knex('components').where({id})
}

function subParts (assmId) {
  return knex.from('bomJoin').where({assmId}).innerJoin('components', 'bomJoin.partId', 'components.id')
}

function parentParts (partId) {
  return knex.from('bomJoin').where({partId}).innerJoin('components', 'bomJoin.assmId', 'components.id')
}

function partInfo (id) {
  return Promise.all([
    part(id),
    subParts(id),
    parentParts(id)
  ])
}

module.exports = {
  all,
  part,
  subParts,
  parentParts,
  partInfo
}
