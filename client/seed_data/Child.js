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
        {
          id: 2,
          name: 'Jose',
          parent_name: 'Mr. Machado',
          contact: 'machado@email.com',
          gender: 'M',
          location: 'Belem',
          community_id: 1,
          country: 'Brazil',
        },
        {
          id: 3,
          name: 'Paulo',
          parent_name: 'Ms. Moreno',
          contact: 'moreno@email.com',
          gender: 'M',
          location: 'Fortaleza',
          community_id: 2,
          country: 'Brazil',
        },
        {
          id: 4,
          name: 'Joao',
          parent_name: 'Mr. Antunes',
          contact: 'antunes@email.com',
          gender: 'M',
          location: 'Fortaleza',
          community_id: 2,
          country: 'Brazil',
        },
        {
          id: 5,
          name: 'Amanda',
          parent_name: 'Ms. Andrade',
          contact: 'andrade@email.com',
          gender: 'F',
          location: 'Manaus',
          community_id: 3,
          country: 'Brazil',
        },
        {
          id: 6,
          name: 'Yessica',
          parent_name: 'Mr. Nunez',
          contact: 'nunez@email.com',
          gender: 'F',
          location: 'Manaus',
          community_id: 3,
          country: 'Brazil',
        },
        {
          id: 7,
          name: 'Gabrela',
          parent_name: 'Mrs. Rodriquez',
          contact: 'rodriquez@email.com',
          gender: 'F',
          location: 'Sucre',
          community_id: 4,
          country: 'Bolivia',
        },
        {
          id: 8,
          name: 'Erika',
          parent_name: 'Mr. Dipierri',
          contact: 'dipierri@email.com',
          gender: 'F',
          location: 'Sucre',
          community_id: 4,
          country: 'Bolivia',
        },
        {
          id: 9,
          name: 'Sergio',
          parent_name: 'Mrs. Alfaro',
          contact: 'alfaro@email.com',
          gender: 'M',
          location: 'Trinidad',
          community_id: 5,
          country: 'Bolivia',
        },
        {
          id: 10,
          name: 'Ronaldino',
          parent_name: 'Mr. Gomez',
          contact: 'gomez@email.com',
          gender: 'M',
          location: 'Trinidad',
          community_id: 5,
          country: 'Bolivia',
        },
        {
          id: 11,
          name: 'Aliz',
          parent_name: 'Mrs. Scapoli',
          contact: 'scapoli@email.com',
          gender: 'F',
          location: 'El Torno',
          community_id: 6,
          country: 'Bolivia',
        },
        {
          id: 12,
          name: 'Alejandro',
          parent_name: 'Mr. Mamolini',
          contact: 'mamolini@email.com',
          gender: 'M',
          location: 'El Torno',
          community_id: 6,
          country: 'Bolivia',
        },
        {
          id: 13,
          name: 'Mrs. Salvatori',
          parent_name: 'Ms. Moreno',
          contact: 'salvatori@email.com',
          gender: 'F',
          location: 'Krassang',
          community_id: 7,
          country: 'Cambodia',
        },
        {
          id: 14,
          name: 'Paulo',
          parent_name: 'Mr. Gaathaa',
          contact: 'gaathaa@email.com',
          gender: 'M',
          location: 'Krassang',
          community_id: 2,
          country: 'Cambodia',
        },
        {
          id: 15,
          name: 'Devi',
          parent_name: 'Mrs. Teteny',
          contact: 'teteny@email.com',
          gender: 'F',
          location: 'Memot',
          community_id: 8,
          country: 'Cambodia',
        },
        {
          id: 16,
          name: 'Pich',
          parent_name: 'Mr. Cho',
          contact: 'moreno@email.com',
          gender: 'F',
          location: 'Memot',
          community_id: 8,
          country: 'Cambodia',
        },
        {
          id: 17,
          name: 'Poeu',
          parent_name: 'Mrs. Talin',
          contact: 'talin@email.com',
          gender: 'M',
          location: 'Samraong',
          community_id: 9,
          country: 'Cambodia',
        },
        {
          id: 18,
          name: 'Gaadhi',
          parent_name: 'Mr. Baadal',
          contact: 'baadal@email.com',
          gender: 'M',
          location: 'Samraong',
          community_id: 9,
          country: 'Cambodia',
        },
      ]);
    });
};
