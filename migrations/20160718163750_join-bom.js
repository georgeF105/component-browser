exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('bomJoin', function (table) {
    table.increments('id').primary()
    table.integer('assmId').references('id').inTable('components')
    table.integer('partId').references('id').inTable('components')
    table.integer('qyt')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('bomJoin')
}
