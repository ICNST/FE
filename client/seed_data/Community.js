exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('table_name').insert([
        { id: 1, name: 'Belem', country_id: 1 },
        { id: 2, colName: 'rowValue2' },
        { id: 3, colName: 'rowValue3' },
      ]);
    });
};