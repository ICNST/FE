exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('table_name').insert([
        { id: 1, child_id: 1, date: '04/12/2010', weight: 26.5 },
        { id: 2, child_id: 1, date: '05/12/2010', weight: 27.2 },
        { id: 3, child_id: 1, date: '10/05/2011', weight: 26.9 },
        { id: 4, child_id: 2, date: '04/12/2010', weight: 35.4 },
        { id: 5, child_id: 2, date: '05/12/2010', weight: 37.0 },
        { id: 6, child_id: 2, date: '10/05/2011', weight: 38.1 },
        { id: 7, child_id: 3, date: '04/12/2010', weight: 26.5 },
        { id: 8, child_id: 3, date: '05/12/2010', weight: 27.2 },
        { id: 9, child_id: 3, date: '10/05/2011', weight: 26.9 },
        { id: 10, child_id: 4, date: '04/12/2010', weight: 35.4 },
        { id: 11, child_id: 4, date: '05/12/2010', weight: 37.0 },
        { id: 12, child_id: 4, date: '10/05/2010', weight: 38.1 },
        { id: 13, child_id: 5, date: '04/12/2010', weight: 26.5 },
        { id: 14, child_id: 5, date: '05/12/2010', weight: 27.2 },
        { id: 15, child_id: 5, date: '10/05/2011', weight: 26.9 },
        { id: 16, child_id: 6, date: '04/12/2010', weight: 35.4 },
        { id: 17, child_id: 6, date: '05/12/2010', weight: 37.0 },
        { id: 18, child_id: 6, date: '10/05/2011', weight: 38.1 },
        { id: 19, child_id: 7, date: '04/12/2010', weight: 26.5 },
      ]);
    });
};
