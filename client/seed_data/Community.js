exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        { id: 1, name: "Belem", country_id: 1 },
        { id: 2, name: "Fortaleza", country_id: 1 },
        { id: 3, name: "Manaus", country_id: 1 },
        { id: 4, name: "Sucre", country_id: 2 },
        { id: 5, name: "Trinidad", country_id: 2 },
        { id: 6, name: "El Torno", country_id: 2 },
        { id: 7, name: "Krassang", country_id: 3 },
        { id: 8, name: "Memot", country_id: 3 },
        { id: 9, name: "Samraong", country_id: 3 }
      ]);
    });
};
