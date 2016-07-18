
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('components').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries}
        knex('components').insert({id: 1, partNumber: '100-00001', 'description': 'my first test part', 'revision':0}),
        knex('components').insert({id: 2, partNumber: '100-00004', 'description': 'my second test part', 'revision':0}),
        knex('components').insert({id: 3, partNumber: '100-00003', 'description': 'my third test part', 'revision':0})
      ]);
    });
};
