exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          id: 1,
          name: 'Jane',
          parent_name: 'Mrs. Doe',
          contact: 'mrs.doe@gmail.com',
          gender: 'F',
          location: 'Belem',
          community_id: 1,
          country: 'Brazil',
        },
        { id: 2, colName: 'rowValue2' },
        { id: 3, colName: 'rowValue3' },
      ]);
    });
};
