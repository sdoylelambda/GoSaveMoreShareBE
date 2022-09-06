exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('requests')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('requests').insert([
        {
          productName: 'Flour - Stronger',
          description:
            'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',

          comments: 'Yogurt - Assorted picnic Pack',
          firstName: 'Yogi',
          lastName: 'Bear',
          email: 'yBear@forest.com',
          phone: '333-867-5309',
        },
      ])
    })
}
