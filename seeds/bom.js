
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bomJoin').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('bomJoin').insert({id: 1, assmId: 1, partId: 2, qyt: 2}),
        knex('bomJoin').insert({id: 2, assmId: 1, partId: 3, qyt: 3}),
        knex('bomJoin').insert({id: 3, assmId: 2, partId: 3, qyt: 5})
      ]);
    });
};
