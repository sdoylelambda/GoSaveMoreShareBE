exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("address")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("address").insert([
        {
          user_id: 1,
          houseNumber: "123 house",
          streetName: "main street",
          city: "somewhere",
          zip: 999,
          state: "FL",
          country: "USA",
          phone: "888-888-8888",
        },
        {
          user_id: 1,
          houseNumber: "234 house",
          streetName: "left street",
          city: "nowhere",
          zip: 888,
          state: "FL",
          country: "USA",
          phone: "777-777-7777",
        },
      ]);
    });
};
