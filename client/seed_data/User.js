exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          id: 1,
          country_name: 'Brazil',
          country_id: 1,
          username: 'braziluser',
          password: 'braziluser',
        },
        {
          id: 2,
          country_name: 'Bolivia',
          country_id: 2,
          username: 'boliviauser',
          password: 'boliviauser',
        },
        {
          id: 3,
          country_name: 'Brazil',
          country_id: 3,
          username: 'cambodiauser',
          password: 'cambodiauser',
        },
      ]);
    });
};
