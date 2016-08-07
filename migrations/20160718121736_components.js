exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('components', function (table) {
      table.increments('id').primary()
      table.string('partNumber')
      table.string('description')
      table.string('author')
      table.string('material')
      table.string('finish')
      table.string('revision')
    })
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('components')
  ])
}
