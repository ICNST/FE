exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('table_name').insert([
        { id: 1, isAdmin: true, username: 'zeleke', password: 'zeleke' },
        { id: 2, isAdmin: true, username: 'sandy', password: 'sandy' },
        { id: 3, isAdmin: true, username: 'jonathan', password: 'jonathan' },
      ]);
    });
};
