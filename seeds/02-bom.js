
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bomJoin').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('bomJoin').insert({id: 1, assmId: 1, partId: 2, qyt: 1}),
        knex('bomJoin').insert({id: 2, assmId: 1, partId: 3, qyt: 1}),
        knex('bomJoin').insert({id: 3, assmId: 1, partId: 4, qyt: 1}),
        knex('bomJoin').insert({id: 4, assmId: 1, partId: 5, qyt: 2}),
        knex('bomJoin').insert({id: 5, assmId: 2, partId: 8, qyt: 1}),
        knex('bomJoin').insert({id: 6, assmId: 2, partId: 9, qyt: 1}),
        knex('bomJoin').insert({id: 7, assmId: 4, partId: 6, qyt: 1}),
        knex('bomJoin').insert({id: 8, assmId: 4, partId: 7, qyt: 6})
      ]);
    });
};
