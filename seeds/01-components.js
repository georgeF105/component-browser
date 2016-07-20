
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('components').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries}
        knex('components').insert({id: 1, partNumber: '100-00001', 'description': 'Wheely Chair', 'revision':0}),
        knex('components').insert({id: 2, partNumber: '100-00002', 'description': 'Seat Assm', 'revision':0}),
        knex('components').insert({id: 3, partNumber: '100-00003', 'description': 'Gas Strut', 'revision':0}),
        knex('components').insert({id: 4, partNumber: '100-00004', 'description': 'Base Assm', 'revision':0}),
        knex('components').insert({id: 5, partNumber: '100-00005', 'description': 'Arms', 'revision':0}),
        knex('components').insert({id: 6, partNumber: '100-00006', 'description': 'legs', 'revision':0}),
        knex('components').insert({id: 7, partNumber: '100-00007', 'description': 'Wheels', 'revision':0}),
        knex('components').insert({id: 8, partNumber: '100-00008', 'description': 'Seat Back', 'revision':0}),
        knex('components').insert({id: 9, partNumber: '100-00009', 'description': 'Seat Base', 'revision':0})
      ]);
    });
};
