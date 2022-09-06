exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("category")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("category").insert([
        { category: "Drinks" },
        { category: "Chips" },
        { category: "Bottled and Canned" },
        { category: "Noodles" },
        { category: "Sauces and Seasonings" },
        { category: "Snacks" },
      ]);
    });
};
